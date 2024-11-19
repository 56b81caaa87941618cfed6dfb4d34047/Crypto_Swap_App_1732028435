<template>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img id="footer-logo" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Crypto_Swap_App_1732028435/main/images/3e7d895a6b9c4f5fab65044e1a874c8b.jpeg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        SwapCrypt
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                    © 2023 SwapCrypt. All rights reserved. Trade responsibly. Cryptocurrency trading involves risks.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>