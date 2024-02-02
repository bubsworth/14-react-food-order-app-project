import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function CheckoutForm() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError) {
      return;
    }

    console.log(emailValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total amount:</p>

      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <Input
        label="Name"
        id="name"
        type="name"
        name="name"
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        value={nameValue}
        error={nameHasError && "Please enter a valid name."}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        value={emailValue}
        error={emailHasError && "Please enter a valid email address."}
      />

      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" name="street" required />
      </div>

      <div className="control-row">
        <Input
          label="Postal Code"
          id="postcode"
          type="postcode"
          name="postcode"
          onChange={handlePostalCodeChange}
          onBlur={handlePostalCodeBlur}
          value={postcodeValue}
          error={postcodeHasError && "Please enter a valid postcode."}
        />
        <Input
          label="City"
          id="city"
          type="city"
          name="city"
          onChange={handleCityChange}
          onBlur={handleCityBlur}
          value={cityValue}
          error={cityHasError && "Please enter a valid city."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Cancel</button>
        <button className="button">Order</button>
      </p>
    </form>
  );
}
