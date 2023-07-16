1. State Pattern:

Purpose: The State pattern is used to handle the different states of order processing based on the available payment methods and amounts. It encapsulates the behavior associated with each state and allows the Order class to change its behavior dynamically during runtime.

2. Chain of Responsibility Pattern:

Purpose: The Chain of Responsibility pattern is used to handle the different payment methods in a sequence until the order is fully processed or rejected. It decouples the sender (OrderProcessor) from the receivers (payment handlers) and provides flexibility in handling payment processing.

3. Memento Pattern:

Purpose: The Memento pattern is used to implement rollback functionality in case of a failed order. It allows us to save the state of the User object before processing an order and restore it if the order processing fails.

4. Observer Pattern:

Purpose: The Observer pattern is used to establish a one-to-many dependency between objects. It allows multiple objects (observers) to be notified automatically when the state of a subject (observable) changes. In this case, it is used to notify interested parties whenever an order is processed successfully or fails.