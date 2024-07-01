

export const request = ( url:string, params = {}, method = 'GET' ) => {
    // let options = {
    //     method
    // };

    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify( params )  
    // };

    if ( 'GET' === method ) {
        url += '?' + ( new URLSearchParams( params ) ).toString();
    } else {
        // options.body = JSON.stringify( params );
    }
    
    // return fetch( url, options ).then( response => response.json() );
};