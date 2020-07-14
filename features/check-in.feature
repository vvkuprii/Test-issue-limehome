Feature: Check-in

  Scenario: Book a trip
    Given I open booking page
    When I fill the "Last name" field with Test value
    And I fill the "Booking reference" field with test1234 value
    And I click on "Submit" button
    Then I wait for Test last name
    When I fill the "Date of birth" field with 01/01/1999 value
    And I choose Business type
    And I click on "Submit" button
    Then I wait for "Thank you" message
