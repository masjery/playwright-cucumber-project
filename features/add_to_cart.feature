Feature: Add Product to Cart

  Scenario: Add a product to the cart after login
    Given I am logged in with username "standard_user" and password "secret_sauce"
    When I add the first product to the cart
    Then the cart should show 1 item
