Axios.get('/orders.json')
                    .then(res => {
                        let Departments = [];
                        for (let key in res.data){
                            Departments.push({
                            ...res.data[key],
                            id: key
                            });
                        }
                        this.setState({Departments : fetchedData}) 
                    })
                    .catch(err => {
                        this.setState({loading : false})
                    });