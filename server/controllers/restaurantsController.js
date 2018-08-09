const axios = require('axios')

const zomato_base_url = 'https://developers.zomato.com/api/v2.1/'

const searchRestaurant = (req, res, next) => {
    const i = req.url.indexOf('?');
    const query = req.url.substr(i + 1);
    const zomato_search_url = `${zomato_base_url}/search?${query}`

    axios.get(zomato_search_url, {
        headers: {
            "user-key": process.env.ZOMATO_KEY
        }
    })
        .then(response => res.status(200).json({
            message: 'success',
            data: response.data
        }))
        .catch(err => res.status(500).json(err))
}

module.exports = { searchRestaurant }