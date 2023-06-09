import { Cards } from "entities/index";

type Content = {
    name: string,
    link: string,
    img: string,
    alt?: string,
    description?: string,
    gitLink?: string
};

const FillCards = () => {
    const contentArray: Content[] = [
        {
            name: "Alef",
            link: "alef",
            img: "alef.jpg",
            alt: "Image Alef example",
            description: "Vue3 + TypeScript + SCSS + HTML/CSS/JS + Cross-browser compatibility",
            gitLink: 'https://github.com/DimCore3/alf-dev-test'
        },
        {
            name: "Calispo",
            link: "calispo",
            img: "calispo.jpg",
            alt: "Image Calispo example",
            description: "React.JS + SCSS + Figma + HTML/CSS/JS",
            gitLink: 'https://github.com/DimCore3/calispo_maket'
        },
        {
            name: "Get-currency",
            link: "get-currency",
            img: "getCurrency.jpg",
            alt: "Image Get currency example",
            description: "HTML/CSS/JS + Bootstrap 5",
            gitLink: 'https://github.com/DimCore3/currency_convertor_CBR'
        },
        {
            name: "Inventory",
            link: "rlt-inventory",
            img: "rltInventory.jpg",
            alt: "Image rlt-inventory",
            description: "Vue3 + TypeScript + HTML/CSS/JS",
            gitLink: 'https://github.com/DimCore3/RLT-inventory'
        },
        {
            name: "GetWash",
            link: "https://dimcore.online/",
            img: "getWash.jpg",
            alt: "Image GetWash",
            description: "React.JS + React-Router + TypeScript + SCSS + HTML/CSS/JS + FSD + Cross-browser compatibility",
            gitLink: 'https://github.com/DimCore3/getwash'
        },
        {
            name: "GPT voicechat telegram bot",
            link: "https://github.com/DimCore3/gpt_voicechat_bot",
            img: "gpt.jpg",
            alt: "Image GPT voicechat telegram bot",
            description: "NodeJS + Telegram-bot-api + GPT-3 + Docker",
            gitLink: 'https://github.com/DimCore3/gpt_voicechat_bot'
        },
        {
            name: "WhatsApp (Green API)",
            link: "https://dimcore.ru/",
            img: "whatsapp.jpg",
            alt: "Whatsapp application on Green API",
            description: "React + React-Route + TypeScript + SCSS + HTML/CSS/JS+ FSD",
            gitLink: 'https://github.com/DimCore3/WhatsApp_Green_API'
        },
        {
            name: "TCS",
            link: "tcs",
            img: "tcs.jpg",
            alt: "tcs",
            description: "React.JS + TypeScript + SCSS + HTML/CSS/JS + FSD + Drag & Drop + Cross-browser compatibility",
            gitLink: 'https://github.com/DimCore3/tcs'
        },
    ];

    return (
        <Cards data={contentArray.reverse()} />
    );
}

export default FillCards;