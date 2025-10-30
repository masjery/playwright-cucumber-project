Feature: Place Order

  Scenario: Successfully place an order after adding a product to the cart
    Given I am logged in and on the dashboard page
    When I add the first product from the dashboard to the cart
    And I proceed to checkout
    And I fill in checkout details with "John" "Doe" "12345"
    Then I should see the order confirmation message
