This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lab 3: Developing a Component with Props

By end of class, you must create a branch that will have your component on it, and you must submit a pull request of your component. You will modify your existing component to add props. See the props-example.tsx file for the format you should follow.

1. Check that your imports include React
2. Create an Interface with the data you should pass to your prop. This indicates the values and data types of each prop you are passing to the component.
3. Modify the Component's first line to include the `React.FC< >` portion, with the brackets indicating the interface. Additionally, list the parameters (and any default values) into the parentheses.
4. Access the parameters using the curly brace notation seen in the example.


## Lab 2: Adding Styles

By end of class, you must style your component according to the below style guide. Utilize the documentation available at [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes) to help you in your mission. **Choose the same component you started in Lab 1**


| Role | Color Name | Example Tailwind Class |
| :--- | :--- | :--- |
| **Primary / CGPS Blue** | Dark Blue | `bg-blue-800` |
| **Accent / CGPS Yellow** | Golden Yellow | `bg-amber-400` |
| **Success / Confirmation** | Strong Green | `bg-emerald-500` |
| **UI Background** | Light Gray | `bg-slate-100` |
| **Primary Text** | Dark Slate | `text-slate-800` |
| **Subtle Border** | Medium Gray | `border-slate-300`|
| **Neutral** | White | `text-white` |

Official Font
The primary font used across the CGPS website is Open Sans. In Tailwind, you can apply this using the font-sans utility class.

1. Call-to-Action Alert
- Alert Box: The background should be the Accent / CGPS Yellow, and the text should be Primary Text.
- Button: The background should be Primary / CGPS Blue, and the text should be Neutral (white). On hover, the background should darken slightly (try hover:bg-blue-900).
- Font: Apply the font-sans class to all text.

2. Labeled Progress Bar
- Card Container: The background should be UI Background.
- Title/Label: The text color should be Primary Text.
- Progress Bar: The color of the bar itself should be Primary / CGPS Blue.
- Font: Apply the font-sans class to the title.

3. Profile Avatar with Status
- Status Indicator: The indicator dot’s background color should be Success/Confirmation to show the user is "Online".
- Placeholder Text: Give whater placeholder text you add a Primary / CGPS Blue background and apply the font-sans class to the text.

4. Simple Confirmation Modal
- Confirm Button: This is a positive action. Style it with a Success/Confirmation background and Neutral text.
- Cancel Button: This is a neutral action. Style it with a UI Background and Primary Text. On hover, its background should get slightly darker (hover:bg-slate-200).
- Font: Make sure the button text uses font-sans.

5. Input with Action Button 🔎
- Input Field: Give it a Subtle Border. When the user clicks on it (focus), the border color should change to Primary / CGPS Blue.
- Button: Style it with a Primary / CGPS Blue background and Neutral text.
- Font: Apply font-sans to the input's placeholder and the button text.

6. Notified Action Button 🔔
- Button: Style it with a Primary / CGPS Blue background and Neutral text.
- Badge: Make it pop! Give it an Accent / CGPS Yellow background and Primary Text.
- Font: Apply font-sans to the button and badge text.

The primary font used across the CGPS website is Open Sans. In Tailwind, you can apply this using the font-sans utility class.

## Lab 1: Working as a Team

By end of class, you must split up the following tasks and divide and conquer. **You may not use AI to complete this lab.**

1. Call-to-Action Alert 
Create an alert box that isn't just for information, but actively encourages a user to perform an action.

HeroUI Components to Use:
- Alert: To display the main message (e.g., "Your profile is incomplete!").
- Button: For the direct call-to-action (e.g., "Complete Now").

2. Labeled Progress Bar 
Build a progress bar that sits inside a container and includes a title or label to provide context for what the bar represents.

HeroUI Components to Use:
- Card: To serve as the container and provide a title area.
- Progress: To display the visual progress itself.

3. Profile Avatar with Status 
Design a simple user avatar that includes a status indicator, perfect for showing if a user is online, away, or offline.

HeroUI Components to Use:
- Avatar: To display the user's image or initials.
- Indicator: To overlay a small colored dot on the avatar representing their status.

4. Simple Confirmation Modal 
Construct a basic modal dialog that asks the user for confirmation and provides "Confirm" and "Cancel" actions.

HeroUI Components to Use:
- Modal: To create the dialog window and backdrop.
- Button: For the confirmation and cancellation actions.

5. Input with Action Button 🔎
Create a common UI element that pairs an input field with a button, such as a search bar or a field for submitting a coupon code.

HeroUI Components to Use:
- Input: For the text entry field.
- Button: For the submit or search action.

6. Notified Action Button 🔔
Create a button that includes a badge, typically used to show a count for items in a cart, unread messages, or pending friend requests.

HeroUI Components to Use:
- Button: The primary clickable element.
- Badge: To display the notification count, positioned on the corner of the button.
