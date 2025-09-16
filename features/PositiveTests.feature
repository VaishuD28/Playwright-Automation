Feature: Ecommerce validation

    @PassedUsers
    Scenario Outline: Placing an order
        Given I login to the application with "<username>" and "<password>"
        When login should be successful
        Then I add "<productName1>" and "<productName2>" to the cart
        When Verify products "<productName1>" and "<productName2>" should be added to cart
        Then Remove "<productName2>" from the cart


        Examples:
            | username                | password     | productName1             | productName2             |
            | standard_user           | secret_sauce | Sauce Labs Backpack      | Sauce Labs Bike Light    |
            | problem_user            | secret_sauce | Sauce Labs Bike Light    | Sauce Labs Backpack      |
            | performance_glitch_user | secret_sauce | Sauce Labs Fleece Jacket | Sauce Labs Onesie        |
            | error_user              | secret_sauce |  Sauce Labs Backpack      | Sauce Labs Bike Light |
            | visual_user             | secret_sauce | Sauce Labs Onesie        | Sauce Labs Bolt T-Shirt  |




