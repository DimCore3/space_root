type Content = {
    name: string,
    link: string,
    img: string,
    alt?: string,
    description?: string,
    gitLink?: string,
};

export type Props = {
    data: Content[],
};
