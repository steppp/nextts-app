import { NextApiRequest, NextApiResponse } from "next";
import { CardContent } from "../../../src/components/Card/Card";
import { readFileSync } from 'fs'
import { resolve as resolvePath } from 'path'
import { PageContents } from "../../_app";

type RequestError = {
    message: string
    details: string
}

type ApiQuery = {
    [key: string]: string | string[]
}

const QUERY_PAGE_NAME_KEY = 'for'

function getPageName(query: ApiQuery): string | undefined {
    const value = query[QUERY_PAGE_NAME_KEY]

    return typeof value === "string" ? value : value.at(0)
}

/**
 * Retrieves the page data for the page with the provided name
 * @param param0 Contains the name of the page to get the data for
 * @returns A serialized JSON containing the page data
 */
export async function getPageData({ for: pageName } : {for: string}) {
    const pageDataFilePath = resolvePath('src', 'static', 'pages', `${pageName}.json`)

    // TODO: use an actual storage system
    return readFileSync(pageDataFilePath, 'utf-8')
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PageContents<any> | RequestError | string>
) {
    console.debug(req.query)
    const pageName = getPageName(req.query)
    if (!pageName) {
        res.status(400).json({
            message: 'Required parameter not found.',
            details: `Please provide the required 'for' parameter`
        })
        return
    }

    const pageData = await getPageData({ for: pageName })
    if (!pageData) {
        res.status(400).json({
            message: `Cannot a page with name '${pageName}'.`,
            details: `Please provide an existing page name in the 'for' parameter`
        })
        return
    }

    res.status(200).json(pageData)
}