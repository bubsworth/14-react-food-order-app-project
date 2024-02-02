import logoImg from "../src/assets/logo.jpg";

function App() {
  return (
    <>
      {/* <Modal open={errorUpdatingAvailableMeals} onClose={handleError}>
        {errorUpdatingAvailableMeals && (
          <Error
            title="An error occurred!"
            message={errorUpdatingAvailableMeals.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemoveAvailableMealItem}>
        <DeleteConfirmation
          onCancel={handleStopRemoveAvailableMealItem}
          onConfirm={handleRemoveAvailableMealItem}
        />
      </Modal> */}

      <header>
        <img src={logoImg} alt="" />
        <h1>ReactFood</h1>
      </header>
      <main>
        {/* {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <MealItems
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching available meals..."
            meals={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailableMeals onSelectMealItem={handleSelectMealItem} /> */}
      </main>
    </>
  );
}

export default App;
