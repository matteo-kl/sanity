import {useContext} from 'react'
import {DocumentPaneContext} from './documentPaneContext'

export function useDocumentPane() {
  const documentPane = useContext(DocumentPaneContext)

  if (!documentPane) {
    throw new Error('DocumentPane: missing context value')
  }

  return documentPane
}