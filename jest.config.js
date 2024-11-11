module.exports = {
  bail: true, //se 1 teste falhar ele para de executar os teste, se estiver como false ele continua executando todos os testes normalmente.
  coverageProvider: "V8",

  testMatch:[ 
    "<rootDir>/**/*.spec.js" //partindo da raiz do projeto, olhe pasta src, ou seja, pula a pasta node_modules.
  ],

  
}