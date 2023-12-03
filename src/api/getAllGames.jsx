
export const getAllGames = async() => {
    let data = null;    
    const apiUrl = 'http://localhost:8010/proxy/v4/games';
    const headers = {
        'Access-Control-Allow-Origin': '*', 
        'Client-ID': 'mqjpyjg0xr9i5h2jloyo4bphf42iky',
        'Authorization': 'Bearer s8sykp9gz5rr27ppgioznm4rohb1wf',
        'Content-Type': 'application/json'
    }

    
    try {
        const response = await fetch(apiUrl, {
            
          mode: 'cors',
          method: 'POST',
          headers: headers,
          body: 'fields id, name, cover.*; limit 7;' 
        });
    
        data = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      return data;
    };

    export default getAllGames;









