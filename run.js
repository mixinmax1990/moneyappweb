
        
        function getData(){
            var token = "MTYxMzY4Njc0OXx8fDkwODdmM2MwLWU2YzItNDRmNS1hZTEwLTdkNjYwODU1Y2E4MHx8fDIwNTR8fHxyaXZlcmJhbmsuKg==.acnm+WH42OrltnKstvQyk0e7nml+Je6bAA0YnywwAvo=";
            const xhr = new XMLHttpRequest();

            let headers = new Headers();

            //headers.append('Content-Type', 'application/json');
            //headers.append('Accept', 'application/json');
            //headers.append('Authorization', 'Bearer ' + token);
            //headers.append('Access-Control-Allow-Origin', '*');
            

            xhr.open('PUT', 'https://api.playground.openbanking.klarna.com/xs2a/v1/sessions');
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://18.159.89.0');

            var psu = {
                "language": "en",
                "psu": {
                    "user_agent": navigator.userAgent,
                    "ip_address": "18.159.89.0"
                }
            }
            xhr.send(psu); 
            //navigator.userAgent
        }

      

        function startKlarnaOpenBankingXS2AApp(){
            try {
                // Start the flow with the client_token from the flow response.
                window.XS2A.startFlow(
                    'MTYxMzY4Njc0OXx8fDkwODdmM2MwLWU2YzItNDRmNS1hZTEwLTdkNjYwODU1Y2E4MHx8fDIwNTR8fHxyaXZlcmJhbmsuKg==.acnm+WH42OrltnKstvQyk0e7nml+Je6bAA0YnywwAvo=',
                    {
                        onFinished: () => {
                            // Read the flow from the server to retrieve the account list.
                            console.log('onFinished: read the flow from the server to retrieve the account list.')
                        },
                        onError: error => {
                            console.error('onError: something bad happened during the flow.', error)
                        },
                    }
                )
            } catch (e) {
                // Handle error that happened while opening the App
                console.error(e)
            }
        }*/
        //window.onXS2AReady = startKlarnaOpenBankingXS2AApp
