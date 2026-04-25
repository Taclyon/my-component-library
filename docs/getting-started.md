# Primeiros Passos

Bem-vindo à documentação da biblioteca de componentes. Este guia o ajudará a configurar e começar a usar nossos componentes em seu projeto.

## 🚀 Pré-requisitos

Para garantir que tudo funcione corretamente, certifique-se de ter instalado em seu projeto React:

* **React** (18 ou superior)
* **Tailwind CSS**
* **TypeScript**

## ⚙️ Configuração

Nossos componentes dependem de duas utilidades essenciais: `clsx` e `tailwind-merge`.

1. **Instale as dependências:**
```bash
npm install clsx tailwind-merge
Configure a utilidade cn:
Crie um arquivo em src/lib/utils.ts e adicione a função abaixo. Isso nos permite combinar classes Tailwind sem conflitos:

TypeScript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
🧩 Como Importar
Usamos o padrão "Barrel" (index.ts) para importações limpas. Você não precisa apontar para arquivos específicos; basta importar da pasta:

TypeScript
// Exemplo: Importando múltiplos componentes de uma vez
import { Button, Input } from "@/components/ui";