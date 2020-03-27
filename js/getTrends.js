let allTrends = "hello"
var getTrends = new Vue({  
  el: '#trends',
  data () {
    return {
    	API_URL: 'http://localhost:5000/api/v1/trends',
    	trends: null,
    	loading: true,
    	errored: false,
    }
  },
  mounted () {
    axios
      .get(this.API_URL)
      .then(response => {
      	// console.log(allTrends)
        this.trends = response.data.data
        updateAllTrends(response.data.data)
        // this.errored =  response.data.data.errorExist
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
});


var getUsers = new Vue({  
  el: '#users',
  data () {
    return {
      API_URL: 'http://localhost:5000/api/v1/getuserlength',
      users: null
    }
  },
  mounted () {
    axios
      .get(this.API_URL)
      .then(response => {
        // console.log(response.data.status)
        this.users = response.data.status
        // updateAllTrends(response.data.data)
        // this.errored =  response.data.data.errorExist
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
});
function updateAllTrends(data) {
  allTrends = data
}
