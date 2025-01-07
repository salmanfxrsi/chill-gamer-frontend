const FAQ = () => {
  return (
    <div className="w-full">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          How can I navigate to the game details page?
        </div>
        <div className="collapse-content">
          <p>
            To view the details of a specific game, click on the "Explore
            Details" button available on the game's card in the Highest Rated
            Game Section or the All Reviews page. This will redirect you to the
            review details page, where you can see all the information about the
            selected game.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          What are the password requirements for registering an account?
        </div>
        <div className="collapse-content">
          <p>
            While registering, your password must meet the following criteria:
            At least one uppercase letter. At least one lowercase letter. A
            minimum length of 6 characters. If your password doesn’t fulfill
            these requirements, an error message will be displayed.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          What features are accessible to logged-in users only?
        </div>
        <div className="collapse-content">
          <p>
            Logged-in users can access the following features: Add Review:
            Submit new game reviews. My Reviews: View, update, or delete your
            own reviews. Game Watchlist: Manage games added to your watchlist
            from the review details page. Non-logged-in users attempting to
            access these features will be redirected to the login page.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 border"
      >
        <div className="collapse-title text-xl font-medium">
          How can I manage my submitted reviews?
        </div>
        <div className="collapse-content">
          <p>
            You can manage your reviews on the My Reviews page. Here, you can:
            View all the reviews you’ve added. Update a review by clicking the
            "Update" button, which redirects to the Update Review Page or opens
            a modal with pre-filled data. Delete a review by clicking the
            "Delete" button. A confirmation prompt will appear before the review
            is removed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
