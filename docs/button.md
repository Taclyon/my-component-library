# Button Component

```markdown
# Componente Button

O componente `Button` é um elemento flexível e reutilizável projetado para disparar ações. Ele suporta várias variantes visuais, tamanhos e estados, garantindo consistência em toda a sua aplicação.

## 📋 Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| label | string | required | O texto a ser exibido no botão. |
| variant | string | primary | O estilo visual do botão. |
| size | string | md | O tamanho do botão. |
| disabled | boolean | false | Se true, o botão não é interativo. |

## 💡 Uso

```tsx
<Button label="Clique aqui" />