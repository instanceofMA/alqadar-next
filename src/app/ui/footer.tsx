export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:gap-8 xl:grid-cols-2">
                    <div className="space-y-8">
                        <img
                            className="h-7"
                            src="./logo.webp"
                            alt="Al-Qadar logo"
                        />
                        <p className="text-sm leading-6 text-gray-300">
                            Delivering cutting edge solutions in IT, Electrical,
                            and Solar sectors.
                        </p>
                        <div className="block space-x-6">
                            {/* <a
                                href="#"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">X</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a> */}
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-400"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    fill="currentColor"
                                    className="size-6"
                                    viewBox="0 0 50 50"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/923334402006"
                                className="text-green-500 hover:text-green-600"
                            >
                                <span className="sr-only">Whatsapp</span>
                                <svg width="160" height="36" fill="none">
                                    <rect
                                        width="160"
                                        height="36"
                                        rx="8"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M21.7885 8.7894c2.4186.0117 4.7528.9614 6.4988 2.6351 1.7881 1.7142 2.8185 4.0127 2.9086 6.488.088 2.4173-.7559 4.7918-2.3566 6.6052-1.7555 1.9889-4.1975 3.1312-6.835 3.2069a9.4172 9.4172 0 0 1-.2709.0039c-1.4211 0-2.8291-.3205-4.1043-.9341l-4.9568 1.1024a.0728.0728 0 0 1-.086-.0811l.8373-5.012c-.7146-1.3057-1.1135-2.7768-1.1565-4.2731-.0724-2.5285.844-4.9337 2.5805-6.7728 1.8005-1.9069 4.2593-2.9684 6.894-2.9684h.0469Zm-.0527 1.6431c-.0757 0-.1513.0011-.2274.0033-4.3138.1237-7.7226 3.7339-7.5988 8.0476.0378 1.3172.4088 2.6102 1.0731 3.7391l.1442.2447-.6204 3.401 3.3656-.7945.2541.1323c1.109.577 2.3515.8794 3.607.8794.0746 0 .1493-.001.2239-.0032 4.3138-.1237 7.7226-3.7338 7.5989-8.0476-.1216-4.2376-3.6078-7.6021-7.8202-7.6021Zm-3.2738 3.2521c.1583.0048.3169.0093.4551.0195.1692.0121.3563.0258.5222.4273.1968.4768.6224 1.6671.6782 1.7878.0557.1207.0911.2608.007.4172-.0841.1562-.1268.2541-.2496.3892-.123.1353-.2593.3023-.3692.4055-.1229.115-.2506.24-.1192.4821.1313.2423.5842 1.0354 1.2712 1.6875.883.838 1.5911 1.1145 1.8724 1.2457.1014.0474.1858.0698.2595.0698.1011 0 .1821-.0423.2593-.1206.148-.15.5933-.6697.7808-.9087.0981-.1251.1869-.1694.2834-.1694.0772 0 .1593.0284.255.0666.2154.086 1.3659.6972 1.5999.8235.234.1261.3905.1905.4469.2914.0564.1013.0416.5772-.1734 1.1264-.2151.5492-1.2016 1.055-1.6385 1.0812-.1279.0077-.2537.0256-.4176.0256-.3958 0-1.0132-.1043-2.4155-.7082-2.3858-1.0274-3.8347-3.552-3.9487-3.7142-.1137-.1625-.9306-1.3193-.8946-2.4894.0359-1.17.6675-1.7265.8927-1.9578.2158-.2218.4631-.2784.6228-.2784l.0199.0004Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M46.9736 17.312h1.824c-.056-.496-.192-.936-.408-1.32-.216-.384-.492-.704-.828-.96-.328-.264-.704-.464-1.128-.6-.416-.136-.86-.204-1.332-.204-.656 0-1.248.116-1.776.348-.52.232-.96.552-1.32.96-.36.408-.636.888-.828 1.44-.192.544-.288 1.136-.288 1.776 0 .624.096 1.208.288 1.752.192.536.468 1.004.828 1.404.36.4.8.716 1.32.948.528.224 1.12.336 1.776.336.528 0 1.012-.08 1.452-.24.44-.16.824-.392 1.152-.696.328-.304.592-.672.792-1.104.2-.432.324-.916.372-1.452h-1.824c-.072.576-.272 1.04-.6 1.392-.32.352-.768.528-1.344.528-.424 0-.784-.08-1.08-.24-.296-.168-.536-.388-.72-.66-.184-.272-.32-.576-.408-.912-.08-.344-.12-.696-.12-1.056 0-.376.04-.74.12-1.092.088-.352.224-.664.408-.936.184-.28.424-.5.72-.66.296-.168.656-.252 1.08-.252.232 0 .452.04.66.12.216.072.408.176.576.312.168.136.308.296.42.48.112.176.184.372.216.588Zm3.0025-2.88V23h1.704v-3.252c0-.632.104-1.084.312-1.356.208-.28.544-.42 1.008-.42.408 0 .692.128.852.384.16.248.24.628.24 1.14V23h1.704v-3.816c0-.384-.036-.732-.108-1.044-.064-.32-.18-.588-.348-.804-.168-.224-.4-.396-.696-.516-.288-.128-.66-.192-1.116-.192-.32 0-.648.084-.984.252-.336.16-.612.42-.828.78h-.036v-3.228h-1.704Zm7.0413 4.272c.024-.4.124-.732.3-.996s.4-.476.672-.636c.272-.16.576-.272.912-.336.344-.072.688-.108 1.032-.108.312 0 .628.024.948.072.32.04.612.124.876.252s.48.308.648.54c.168.224.252.524.252.9v3.228c0 .28.016.548.048.804s.088.448.168.576h-1.728c-.032-.096-.06-.192-.084-.288a4.1387 4.1387 0 0 1-.036-.312c-.272.28-.592.476-.96.588-.368.112-.744.168-1.128.168-.296 0-.572-.036-.828-.108-.256-.072-.48-.184-.672-.336-.192-.152-.344-.344-.456-.576-.104-.232-.156-.508-.156-.828 0-.352.06-.64.18-.864.128-.232.288-.416.48-.552.2-.136.424-.236.672-.3.256-.072.512-.128.768-.168.256-.04.508-.072.756-.096.248-.024.468-.06.66-.108s.344-.116.456-.204c.112-.096.164-.232.156-.408 0-.184-.032-.328-.096-.432-.056-.112-.136-.196-.24-.252-.096-.064-.212-.104-.348-.12-.128-.024-.268-.036-.42-.036-.336 0-.6.072-.792.216-.192.144-.304.384-.336.72h-1.704Zm3.936 1.26c-.072.064-.164.116-.276.156-.104.032-.22.06-.348.084-.12.024-.248.044-.384.06s-.272.036-.408.06c-.128.024-.256.056-.384.096-.12.04-.228.096-.324.168-.088.064-.16.148-.216.252-.056.104-.084.236-.084.396 0 .152.028.28.084.384a.692.692 0 0 0 .228.252c.096.056.208.096.336.12.128.024.26.036.396.036.336 0 .596-.056.78-.168.184-.112.32-.244.408-.396.088-.16.14-.32.156-.48.024-.16.036-.288.036-.384v-.636Zm5.1866-3.168v-1.86h-1.704v1.86h-1.032v1.14h1.032v3.66c0 .312.052.564.156.756.104.192.244.34.42.444.184.104.392.172.624.204.24.04.492.06.756.06.168 0 .34-.004.516-.012s.336-.024.48-.048v-1.32c-.08.016-.164.028-.252.036-.088.008-.18.012-.276.012-.288 0-.48-.048-.576-.144-.096-.096-.144-.288-.144-.576v-3.072h1.248v-1.14H66.14Zm6.9106 3.108c0-.248.024-.492.072-.732.048-.24.128-.452.24-.636.12-.184.276-.332.468-.444.192-.12.432-.18.72-.18s.528.06.72.18c.2.112.356.26.468.444.12.184.204.396.252.636.048.24.072.484.072.732s-.024.492-.072.732c-.048.232-.132.444-.252.636-.112.184-.268.332-.468.444-.192.112-.432.168-.72.168s-.528-.056-.72-.168c-.192-.112-.348-.26-.468-.444-.112-.192-.192-.404-.24-.636-.048-.24-.072-.484-.072-.732Zm-1.704 0c0 .496.076.944.228 1.344.152.4.368.744.648 1.032.28.28.616.496 1.008.648.392.152.832.228 1.32.228.488 0 .928-.076 1.32-.228.4-.152.74-.368 1.02-.648.28-.288.496-.632.648-1.032.152-.4.228-.848.228-1.344 0-.496-.076-.944-.228-1.344-.152-.408-.368-.752-.648-1.032-.28-.288-.62-.508-1.02-.66-.392-.16-.832-.24-1.32-.24-.488 0-.928.08-1.32.24-.392.152-.728.372-1.008.66-.28.28-.496.624-.648 1.032-.152.4-.228.848-.228 1.344Zm7.528-3.108V23h1.704v-3.252c0-.632.104-1.084.312-1.356.208-.28.544-.42 1.008-.42.408 0 .692.128.852.384.16.248.24.628.24 1.14V23h1.704v-3.816c0-.384-.036-.732-.108-1.044-.064-.32-.18-.588-.348-.804-.168-.224-.4-.396-.696-.516-.288-.128-.66-.192-1.116-.192-.36 0-.712.084-1.056.252-.344.16-.624.42-.84.78h-.036v-.864h-1.62ZM97.6677 23l2.304-8.568h-1.848l-1.404 5.904h-.024l-1.464-5.904h-1.764l-1.488 5.832h-.024l-1.356-5.832h-1.884L90.9837 23h1.908l1.428-5.832h.024L95.7957 23h1.872Zm2.9923-8.568V23h1.704v-3.252c0-.632.104-1.084.312-1.356.208-.28.544-.42 1.008-.42.408 0 .692.128.852.384.16.248.24.628.24 1.14V23h1.704v-3.816c0-.384-.036-.732-.108-1.044-.064-.32-.18-.588-.348-.804-.168-.224-.4-.396-.696-.516-.288-.128-.66-.192-1.116-.192-.32 0-.648.084-.984.252-.336.16-.612.42-.828.78h-.036v-3.228h-1.704Zm7.041 4.272c.024-.4.124-.732.3-.996s.4-.476.672-.636c.272-.16.576-.272.912-.336.344-.072.688-.108 1.032-.108.312 0 .628.024.948.072.32.04.612.124.876.252s.48.308.648.54c.168.224.252.524.252.9v3.228c0 .28.016.548.048.804s.088.448.168.576h-1.728c-.032-.096-.06-.192-.084-.288a4.1387 4.1387 0 0 1-.036-.312c-.272.28-.592.476-.96.588-.368.112-.744.168-1.128.168-.296 0-.572-.036-.828-.108-.256-.072-.48-.184-.672-.336-.192-.152-.344-.344-.456-.576-.104-.232-.156-.508-.156-.828 0-.352.06-.64.18-.864.128-.232.288-.416.48-.552.2-.136.424-.236.672-.3.256-.072.512-.128.768-.168.256-.04.508-.072.756-.096.248-.024.468-.06.66-.108s.344-.116.456-.204c.112-.096.164-.232.156-.408 0-.184-.032-.328-.096-.432-.056-.112-.136-.196-.24-.252-.096-.064-.212-.104-.348-.12-.128-.024-.268-.036-.42-.036-.336 0-.6.072-.792.216-.192.144-.304.384-.336.72h-1.704Zm3.936 1.26c-.072.064-.164.116-.276.156-.104.032-.22.06-.348.084-.12.024-.248.044-.384.06s-.272.036-.408.06c-.128.024-.256.056-.384.096-.12.04-.228.096-.324.168-.088.064-.16.148-.216.252-.056.104-.084.236-.084.396 0 .152.028.28.084.384a.692.692 0 0 0 .228.252c.096.056.208.096.336.12.128.024.26.036.396.036.336 0 .596-.056.78-.168.184-.112.32-.244.408-.396.088-.16.14-.32.156-.48.024-.16.036-.288.036-.384v-.636Zm5.187-3.168v-1.86h-1.704v1.86h-1.032v1.14h1.032v3.66c0 .312.052.564.156.756.104.192.244.34.42.444.184.104.392.172.624.204.24.04.492.06.756.06.168 0 .34-.004.516-.012s.336-.024.48-.048v-1.32c-.08.016-.164.028-.252.036-.088.008-.18.012-.276.012-.288 0-.48-.048-.576-.144-.096-.096-.144-.288-.144-.576v-3.072h1.248v-1.14h-1.248Zm3.378 4.188h-1.62c.016.416.108.764.276 1.044.176.272.396.492.66.66.272.168.58.288.924.36.344.072.696.108 1.056.108.352 0 .696-.036 1.032-.108.344-.064.648-.18.912-.348.264-.168.476-.388.636-.66.168-.28.252-.624.252-1.032 0-.288-.056-.528-.168-.72-.112-.2-.26-.364-.444-.492-.184-.136-.396-.244-.636-.324-.232-.08-.472-.148-.72-.204-.24-.056-.476-.108-.708-.156-.232-.048-.44-.1-.624-.156-.176-.064-.32-.144-.432-.24-.112-.096-.168-.22-.168-.372 0-.128.032-.228.096-.3.064-.08.14-.14.228-.18.096-.04.2-.064.312-.072.112-.016.216-.024.312-.024.304 0 .568.06.792.18.224.112.348.332.372.66h1.62c-.032-.384-.132-.7-.3-.948-.16-.256-.364-.46-.612-.612-.248-.152-.532-.26-.852-.324-.312-.064-.636-.096-.972-.096-.336 0-.664.032-.984.096-.32.056-.608.16-.864.312-.256.144-.464.344-.624.6-.152.256-.228.584-.228.984 0 .272.056.504.168.696.112.184.26.34.444.468.184.12.392.22.624.3.24.072.484.136.732.192.608.128 1.08.256 1.416.384.344.128.516.32.516.576 0 .152-.036.28-.108.384-.072.096-.164.176-.276.24-.104.056-.224.1-.36.132-.128.024-.252.036-.372.036-.168 0-.332-.02-.492-.06-.152-.04-.288-.1-.408-.18-.12-.088-.22-.196-.3-.324-.072-.136-.108-.296-.108-.48Zm7.466-1.296 1.116-3.144h.024l1.08 3.144h-2.22Zm.18-5.256L124.608 23h1.896l.672-1.908h3.204l.648 1.908h1.956l-3.204-8.568h-1.932Zm8.827 7.452c-.272 0-.504-.056-.696-.168-.192-.112-.348-.256-.468-.432-.112-.184-.196-.396-.252-.636-.048-.24-.072-.484-.072-.732 0-.256.024-.504.072-.744.048-.24.128-.452.24-.636.12-.184.272-.332.456-.444.192-.12.428-.18.708-.18.272 0 .5.06.684.18.192.112.348.264.468.456.12.184.204.396.252.636.056.24.084.484.084.732s-.024.492-.072.732c-.048.24-.132.452-.252.636-.112.176-.264.32-.456.432-.184.112-.416.168-.696.168Zm-3.132-5.088v8.376h1.704v-2.94h.024c.208.304.472.536.792.696.328.152.684.228 1.068.228.456 0 .852-.088 1.188-.264.344-.176.628-.412.852-.708.232-.296.404-.636.516-1.02.112-.384.168-.784.168-1.2 0-.44-.056-.86-.168-1.26-.112-.408-.284-.764-.516-1.068-.232-.304-.524-.548-.876-.732-.352-.184-.772-.276-1.26-.276-.384 0-.736.076-1.056.228-.32.152-.584.396-.792.732h-.024v-.792h-1.62Zm10.467 5.088c-.272 0-.504-.056-.696-.168-.192-.112-.348-.256-.468-.432-.112-.184-.196-.396-.252-.636-.048-.24-.072-.484-.072-.732 0-.256.024-.504.072-.744.048-.24.128-.452.24-.636.12-.184.272-.332.456-.444.192-.12.428-.18.708-.18.272 0 .5.06.684.18.192.112.348.264.468.456.12.184.204.396.252.636.056.24.084.484.084.732s-.024.492-.072.732c-.048.24-.132.452-.252.636-.112.176-.264.32-.456.432-.184.112-.416.168-.696.168Zm-3.132-5.088v8.376h1.704v-2.94h.024c.208.304.472.536.792.696.328.152.684.228 1.068.228.456 0 .852-.088 1.188-.264.344-.176.628-.412.852-.708.232-.296.404-.636.516-1.02.112-.384.168-.784.168-1.2 0-.44-.056-.86-.168-1.26-.112-.408-.284-.764-.516-1.068-.232-.304-.524-.548-.876-.732-.352-.184-.772-.276-1.26-.276-.384 0-.736.076-1.056.228-.32.152-.584.396-.792.732h-.024v-.792h-1.62Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">
                                Solutions
                            </h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="https://grandeur.dev"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        IoT Platform
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/it"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        IT Solutions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/solar"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        Solar Energy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">
                                Company
                            </h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a
                                        href="/company"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/blog"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/partners"
                                        className="text-sm leading-6 text-gray-300 hover:text-white"
                                    >
                                        Partners
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        © 2024 Al-Qadar AoP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
