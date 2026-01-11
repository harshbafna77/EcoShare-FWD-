# Payment Settlement Feature

## Overview
Users can now mark debts as "paid" when they settle their share of expenses. This feature helps track who has paid their debts and updates the settlement calculations in real-time.

## How It Works

### Backend Changes
1. **New Database Table**: Added `settlements` array to track payment records
2. **New API Endpoints**:
   - `POST /api/settlements` - Record a new settlement
   - `GET /api/settlements/:tripId` - Get all settlements for a trip
3. **Updated Settlement Calculation**: The `/api/trips/:id/summary` endpoint now:
   - Fetches all settlements for the trip
   - Applies settlements to balances before calculating debts
   - Returns settlements in the response

### Frontend Changes
1. **Mark as Paid Button**: Added next to each debt in the "Settle Up" tab
   - Only visible to the payer (debtor) or receiver (creditor) involved in that specific debt
   - Clicking shows a confirmation dialog
   - On confirmation, records the settlement and refreshes the view
2. **Payment History Section**: Shows all completed settlements with:
   - Who paid whom
   - Amount paid
   - Date and time of payment
   - Styled with reduced opacity to differentiate from pending debts

## User Flow
1. User goes to a trip's "Settle Up" tab
2. Sees their balances and debts
3. After paying someone, they click "✓ Mark as Paid" next to that debt
4. Confirms the payment in the dialog
5. The debt is recorded and removed from the "How to Settle Up" list
6. Balances are updated to reflect the payment
7. Payment appears in the "Payment History" section

## Technical Details
- Settlements are stored with: `id`, `tripId`, `fromUserId`, `toUserId`, `amount`, `date`
- Settlement calculation applies settlements by:
  - Increasing the debtor's balance (they paid, so they owe less)
  - Decreasing the creditor's balance (they received, so they're owed less)
- The UI only shows the "Mark as Paid" button to users involved in that specific debt for security

## Example
If Alice owes Bob ₹500:
1. Initial state: Alice's balance = -500, Bob's balance = +500
2. Alice pays Bob and clicks "Mark as Paid"
3. Settlement recorded: from=Alice, to=Bob, amount=500
4. Updated state: Alice's balance = 0, Bob's balance = 0
5. Payment shows in history: "Alice paid Bob ₹500.00"
