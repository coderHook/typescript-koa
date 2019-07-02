import { JsonController, Get, Param } from 'routing-controllers'
import { pagesById, pages, Page } from './data'

type PageList = { pages: Page[] }

@JsonController()
export default class PageController {
  @Get('/pages/')
  allPages(): PageList {
    return pages;
  }
  
  @Get('/pages/:id')
  getPage(
    @Param('id') id: number
  ): Page {
    return pagesById[id]
  }
}

