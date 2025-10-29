Feature: Login to Swag Labs

  Scenario Outline: Successful login with valid credentials
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I should see the products page

  Examples:
    | username       | password     |
    | standard_user  | secret_sauce |
