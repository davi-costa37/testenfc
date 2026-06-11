📑 Registro de Ponto Eletrônico (NFC / QR Code)
Este projeto é um sistema web simples e eficiente para registro de ponto eletrônico de funcionários. Ele foi projetado para ser integrado com tags NFC ou QR Codes, onde cada funcionário possui um link exclusivo contendo o seu ID. Ao aproximar o celular da tag ou escanear o código, o ponto é registrado automaticamente.

⚙️ Como Funciona
Leitura do ID: O script lê o parâmetro id diretamente da URL da página (ex: meusite.com/?id=ID_DO_FUNCIONARIO).

Validação: Ele consulta o banco de dados Firebase Firestore para verificar se o funcionário existe.

Lógica de Ponto (Alternância): O sistema verifica a ultimaAcao do funcionário no banco. Se a última ação foi "entrada", ele registra uma "saída", e vice-versa.

Gravação de Dados: * Salva um novo documento no histórico de registros do funcionário com a data, hora e o tipo de marcação.

Atualiza o campo ultimaAcao no cadastro principal do funcionário para a próxima batida.

🛠️ Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript (ES6 Modules)

Banco de Dados (BaaS): Firebase Firestore (Persistência de dados em tempo real)

ESTRUTURA FIRESTORE(BANCO DE DADOS)
funcionarios (coleção)
  └── [id_do_funcionario] (documento)
        ├── nome: "Nome do Funcionário"
        ├── ultimaAcao: "entrada" ou "saida"
        └── registros (subcoleção)
              └── [id_do_registro] (documento)
                    ├── data: "DD/MM/AAAA"
                    ├── hora: "HH:MM:SS"
                    └── tipo: "entrada" ou "saida"

📄 Licença
Este projeto está sob a licença MIT.
