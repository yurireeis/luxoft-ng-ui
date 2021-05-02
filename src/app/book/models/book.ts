export interface Book {
    kind: string;
    totalItems: number;
    items: Item[];
}

interface Item {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    searchInfo: SearchInfo;
}

interface VolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    industryIdentifiers: IndustryIdentifiers[];
    readingModes: ReadingModes;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface ReadingModes {
    text: boolean;
    image: boolean;
}

interface IndustryIdentifiers {
    type: string;
    identifier: string;  
}

interface SaleInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: PDFInfo;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

interface SearchInfo {
    textSnippet: string;
}

interface Epub {
    isAvailable: boolean;
    downloadLink: string;
}

interface PDFInfo {
    isAvailable: boolean;
    downloadLink: string;
}
