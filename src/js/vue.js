var app = new Vue({
    el: '#app',
    data: {
        text: {
            inside: {
                acronym: "INSIDE<br><h2>Interoperabilidade Semântica<br>na Integração de Dados de Engenharia</h2>",
                description: "O INSIDE é um sistema de integração de dados orientado a ontologia, aplicado ao setor de óleo e gás.",
                goals: [
                    "Integração de bases de dados estruturadas e heterogêneas como bancos de dados relacionais e planilhas",
                    "Representação formal de conhecimento para incorporar significado aos dados e alcançar a interoperabilidade semântica entre sistemas de informação",
                    "Utilização de tecnologias de código aberto e escaláveis"
                ],
                pages: [
                    "Página inicial",
                    "Página de dicionário de dados",
                    "Página de serviços de dados",
                    "Página de criação de serviço composto",
                    "Página de criação de um serviço composto - configuração de uma junção",
                    "Página de serviços de dados CFIHOS",
                    "Página do validador CFIHOS"
                ],
                publications: [
                    {
                        year: 2023,
                        conference: "Proceedings of XIX Brazilian Symposium on Information Systems (SBSI ’23)",
                        title: "INSIDE: an Ontology-based Data Integration System Applied to the Oil and Gas Sector",
                        doi: "https://doi.org/10.1145/3592813.3592893"
                    },
                    {
                        year: 2023,
                        conference: "Proceedings of the 25th International Conference on Enterprise Information Systems - ICEIS",
                        title: "INSIDE: Semantic Interoperability in Engineering Data Integration",
                        doi: "https://doi.org/10.5220/0011748700003467"
                    },
                    {
                        year: 2022,
                        conference: "Proceeding of Rio Oil & Gas Expo and Conference",
                        title: "INSIDE | Interoperabilidade Semântica para Integração de Dados de Engenharia",
                        doi: "https://doi.org/10.48072/2525-7579.rog.2022.351"
                    },
                    {
                        year: 2021,
                        conference: "iiWAS2021: The 23rd International Conference on Information Integration and Web Intelligence",
                        title: "Hybrid Architecture to Achieve Semantic Interoperability for Engineering Oil and Gas Industry Process",
                        doi: "https://doi.org/10.1145/3487664.3487782"
                    },
                    {
                        year: 2020,
                        conference: "Proceeding of Rio Oil & Gas Expo and Conference",
                        title: "Estado da arte sobre arquiteturas de sistemas para integração de dados",
                        doi: "https://doi.org/10.48072/2525-7579.rog.2020.414"
                    }
                ],
                team: {
                    coordination: [
                        {
                            name: "Eduardo Thadeu Corseuil",
                            email: "thadeu@tecgraf.puc-rio.br"
                        },
                        {
                            name: "Fernando Rodrigues Gonzalez",
                            email: "fernando.gonzalez@petrobras.com.br"
                        },
                    ],
                    research: [
                        {
                            name: "Elvismary Molina de Armas",
                            email: "emolina@tecgraf.puc-rio.br"
                        },
                        {
                            name: "Geiza Maria Hamazaki da Silva",
                            email: "geiza.hamazaki@uniriotec.br"
                        },
                        {
                            name: "Hugo Fernandes Neves",
                            email: "hugofn@tecgraf.puc-rio.br"
                        },
                        {
                            name: "Júlio Gonçalves Campos",
                            email: "juliogcampos@tecgraf.puc-rio.br"
                        },
                        {
                            name: "Rodrigo Goyannes Gusmão Caiado",
                            email: "rodrigocaiado@tecgraf.puc-rio.br"
                        },
                        {
                            name: "Vitor Pinheiro de Almeida",
                            email: "valmeida@tecgraf.puc-rio.br"
                        },
                    ]
                }
            }
        },
    }
})