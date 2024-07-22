const Hiru = require('./index');
const api = new Hiru()
async function News() {
    try {
        const News = await api.BreakingNews();
        console.log(News);
       
    } catch (error) {
        console.error('Error getting Breaking News data:', error.message);
    }
}

News();