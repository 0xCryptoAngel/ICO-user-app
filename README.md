# This is Frontend for Crossmint page based on Ethereum

This is built using Vue3, Tailwind CSS, Vite, crossmint client SDK.

********************

1. Create a new Vue3 + Vite + Tailwind CSS project.
2. Go to the root folder of your minting website and run the following command: yarn add @crossmint/client-sdk-vanilla-ui
3. Create your crossmint test account in this link: https://staging.crossmint.io/console (Users don't need verification in test crossmint account)
4. Collection NFT in crossmint test account (You can reference this link: https://docs.crossmint.io/accept-credit-cards/integration-guides/ethereum)
    - Specifying a recipient address parameter for your minting function
    - Specifying the parameter that indicates the number of NFTs to mint in a single transaction
    - Grabbing the ABI section for your minting function
5. Get Client ID from Stagin.crossmint.io/console.(Please check below example screenshots)
    - https://prnt.sc/lHKUeB7V2neS
    - https://prnt.sc/PpVQwF53FozJ
6. Configurate mintConfig props in Vue.(You must use 0xdAb1a1854214684acE522439684a145E62505233 as "to" address of mint function)
7. Run Project using below command.

You can see minted Test NFT on your crossmint wallet!!!

Thank you for your time.

********************

Node command

    npm run dev       // "vite",
    npm run build     // "vite build",
    npm run preview   // "vite preview"

