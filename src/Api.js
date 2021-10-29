import axios from 'axios'

//export const API_URL = 'https://content.guardianapis.com/search'
export const API_URL = 'https://api.themoviedb.org/3/'
//const API_KEY = '38dac9cb-d687-4d88-909c-942ce5868e83';

class Api {
  /**
   * Get the list of all articles
   */
  // getAll() {
  //   return axios.get(API_URL + '?api-key=' + API_KEY + '&show-fields=trailText,thumbnail')
  //     .then(res => res.data.response && res.data.response.results)
  // }

  getAll() {
    return axios.get(API_URL + 'search/person/?query=Tom Hardy&api_key=0b2c8c55e31fe8c06ce83707d8e2a97b')
      .then(res => res.data)
  }
}

export default new Api();