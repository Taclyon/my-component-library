<!-- Português -->
🚀 Biblioteca de Componentes
Uma biblioteca de componentes de interface do usuário profissional, escalável e de alto desempenho, construída com React, TypeScript e Tailwind CSS.

📖 Visão Geral
Este projeto visa fornecer um conjunto robusto de componentes reutilizáveis, seguindo as melhores práticas do setor. Ele é construído com uma arquitetura modular, garantindo que seu aplicativo permaneça sustentável à medida que cresce.

🛠 Pré-requisitos e Instalação
Antes de começar, certifique-se de que seu projeto esteja configurado com o Tailwind CSS. Instale os utilitários necessários:

Bash
npm install clsx tailwind-merge


🧩 Arquitetura
Utilizamos um padrão de indexação modular para manter as importações organizadas. Você pode importar todos os seus componentes de interface do usuário de uma única fonte:

TypeScript
import { Button, Input, Card } from "@/components/ui";

📁 Documentação
À medida que esta biblioteca cresce, organizamos a documentação detalhada de cada componente no diretório docs/:

* [Button Component](docs/button.md)

* [Input Component](docs/input.md)

💡 Principais Recursos
Tipagem Estrita: Suporte completo ao TypeScript para uma melhor experiência de desenvolvimento e autocompletar.

Estilização Inteligente: Integrado ao tailwind-merge para resolver conflitos de classes sem esforço.

Estrutura Escalável: Construído com um padrão "Index Barrel" para importações mais limpas e centralizadas.

Padrões Profissionais: Estrutura de código limpa e modular, pronta para aplicativos de nível de produção.

📜Licença
Este projeto está licenciado sob a Licença MIT.
