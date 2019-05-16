const result = document.querySelector('#result');

const templateBuilder = data.filter(game =>{
    return game.console === 'computer';
})
.map(game =>{
    return `
    <h1>top game</h1>
    <div>name:${game.name}</div>;
    `;
})
.join('');
result.innerHTML = templateBuilder;

console.log('templateBuilder', templateBuilder);