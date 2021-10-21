const fetch = require('node-fetch');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const { sleep } = require('./src/utils');
let credentials = ''

async function init(){
    await search(false)
}

async function search(verbose){
    let search_url = 'https://api.github.com/search/code'
    let query = `sort=indexed&per-page=1&q=${encodeURIComponent(`"BEGIN PRIVATE KEY" "END PRIVATE KEY" "service account" extension:json`)}`;
    
    let response = await fetch(`${search_url}?${query}`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        },
    });

    let json = await response.json()
    let url = await json.items[0].html_url.replace('https://github.com/','https://raw.githubusercontent.com/').replace('/blob','')
    await get_content(url,verbose)
}

async function get_content(item, verbose){
    let response = await fetch(`${item}`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        },
    });

    new_credentials = await response.text()
    if (credentials != new_credentials){
        credentials = new_credentials
        if(verbose){
            console.log((new Date(Date.now())).toISOString())
            console.log(credentials)
        }
    }
}

async function main(){
    console.log('')
    console.log('')
    console.log('SEARCHING LEAKED SERVICE ACCOUNTS ...')
    console.log('')
    await init()
    while(true){
        try{
            await search(true)
        }catch(e){
            console.error(e)
        }
        
        await sleep(30000)
    }

}

main()