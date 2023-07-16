Problem Statement: Order Checkout Process with Multiple Payment Methods

You have been given the task to implement an order checkout process with multiple payment methods for a user's online shopping platform. The goal is to facilitate a smooth and seamless payment experience for the user while considering their available cash, wallet coins, and credit limit. The order checkout process should follow specific steps to determine the payment sources and successfully process the order.

Requirements:

The order checkout process will involve three primary payment sources: cash, user wallet coins, and a credit limit.

The order checkout process should be triggered when a user attempts to place an order.

The order details will include the total order value, which represents the amount the user needs to pay to complete the order.

The user's available payment sources are as follows:

Cash: The user's available cash amount that can be used to pay for the order.
User Wallet Coins: The user's virtual wallet, containing wallet coins, which can be used to partially or fully pay for the order.
Credit Limit: The user's credit limit, representing the maximum amount they can borrow to pay for the order when their cash and wallet coins are insufficient.
The order checkout process should follow the steps below:
a. Check if the total order value can be fully deducted from the user's available cash. If possible, deduct the amount from the cash, and the order is considered processed.
b. If the total order value exceeds the available cash, deduct the remaining amount from the user's wallet coins. If there are enough wallet coins to cover the remaining amount, process the order.
c. If both cash and wallet coins are insufficient to cover the total order value, check if the remaining amount can be covered by the user's credit limit. If the credit limit is sufficient, process the order.

If the total order value cannot be covered by the available payment sources (cash, wallet coins, and credit limit), the order process will fail, and the user will be unable to complete the order.

After successfully processing the order, update the user's available payment sources as follows:

If cash was used, deduct the corresponding amount from the user's cash balance.
If wallet coins were used, deduct the corresponding amount from the user's wallet.
If the credit limit was used, update the credit amount accordingly.
If the order process involved using wallet coins or the credit limit, update the user's remaining wallet coins and credit limit.

In the end notify to the relevant handler  

Test Cases:

Total order value = $30, Cash = $10, User Wallet = $10, Credit Limit = $10

Order process: $10 from cash, $10 from user wallet, $10 from credit limit.
After processing: User has $0 in the wallet and $0 credit limit.
Total order value = $30, Cash = $30, User Wallet = $10, Credit Limit = $10

Order process: $30 from cash.
After processing: User has $10 in the wallet and $10 credit limit.
Total order value = $30, Cash = $20, User Wallet = $10, Credit Limit = $10

Order process: $20 from cash, $10 from user wallet.
After processing: User has $0 in the wallet and $10 credit limit.
Total order value = $30, Cash = $0, User Wallet = $10, Credit Limit = $10

Order process: Failed, as the order value cannot be covered by available payment sources.
After processing: User still has $10 in the wallet and $10 credit limit.
Ensure that the order checkout process adheres to these requirements and handles various scenarios to provide users with a seamless payment experience.