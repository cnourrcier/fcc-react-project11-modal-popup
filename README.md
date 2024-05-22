# Modal Popup

Part 11 of the freeCodeCamp 25 React Projects for interview.

This project involves creating a reusable and customizable modal component using React. The project includes the implementation of a modal popup that can be dynamically displayed and hidden based on user interaction. 

Key features:

- Modal Component: A core component that serves as the container for the modal popup. It accepts props such as id, header, body, footer, and handleCloseModalPopup to customize its content and behavior.

- Dynamic Content: The modal can display different content for its header, body, and footer. Default text is provided if no custom content is passed.

- Close Functionality: An icon within the modal allows users to close the popup. The handleCloseModalPopup function is passed as a prop to handle this action.

- State Management: The ModalTest component manages the state to control the visibility of the modal. It includes functions to open and close the modal.

- Component Integration: Separate components (ModalHeader, ModalBody, ModalFooter) are used to structure the content within the modal. These components are imported and utilized within the ModalTest component to demonstrate the modal's usage.