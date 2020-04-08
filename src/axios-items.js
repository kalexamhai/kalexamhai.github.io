import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://kal-exam-hai.firebaseio.com/'
});

export default instance;