//Tâche 01:
//Itérer avec Async/Await: Ecrire une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.
const iterateWithAsyncAwait = async (values) => {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
};

// Exemple d'utilisation
iterateWithAsyncAwait(['valeur1', 'valeur2', 'valeur3']);
//Tâche 02:
//Attendre un appel: Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API. Utilisez await pour attendre la réponse de l'API, puis enregistrez les données.
const awaitCall = async () => {
    const response = await fetch('https://api.example.com/data'); // Remplacez par une URL valide
    const data = await response.json();
    console.log('Données récupérées:', data);
};

// Exemple d'utilisation
awaitCall();
//Tâche 03:
const awaitCallWithErrorHandling = async () => {
    try {
        const response = await fetch('https://api.example.com/data'); // Remplacez par une URL valide
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        const data = await response.json();
        console.log('Données récupérées:', data);
    } catch (error) {
        console.error('Une erreur est survenue:', error.message);
    }
};

// Exemple d'utilisation
awaitCallWithErrorHandling();
//Tâche 04:
const concurrentRequests = async () => {
    const request1 = fetch('https://api.example.com/data1'); // Remplacez par une URL valide
    const request2 = fetch('https://api.example.com/data2'); // Remplacez par une URL valide

    const [response1, response2] = await Promise.all([request1, request2]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Données de la première requête:', data1);
    console.log('Données de la seconde requête:', data2);
};

// Exemple d'utilisation
concurrentRequests();
//Tâche 05:
const parallelCalls = async (urls) => {
    try {
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);

        const dataPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error('Erreur dans une des requêtes');
            }
            return response.json();
        });

        const data = await Promise.all(dataPromises);
        console.log('Données récupérées:', data);
    } catch (error) {
        console.error('Une erreur est survenue lors des requêtes:', error.message);
    }
};

// Exemple d'utilisation
parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);




