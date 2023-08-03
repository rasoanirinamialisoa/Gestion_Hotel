
  $(document).ready(function () {
    // Toggle submenu when clicked
    $(".submenu > a").on("click", function (e) {
      e.preventDefault(); // Prevent the default behavior of the link
      var $this = $(this);
      var $submenu = $this.next(".submenu_class");

      // Close other open submenus
      $(".submenu_class").not($submenu).slideUp("fast");
      $(".submenu > a").not($this).parent().removeClass("active");
      $(".menu-arrow").removeClass("rotate");

      // Toggle the clicked submenu
      $this.parent().toggleClass("active");
      $submenu.slideToggle("fast");
      $this.find(".menu-arrow").toggleClass("rotate");
    });

    // Close menu when clicking outside
    $(document).on("click", function (e) {
      var $target = $(e.target);
      if (!$target.closest(".sidebar").length) {
        $(".submenu_class").slideUp("fast");
        $(".submenu > a").parent().removeClass("active");
        $(".menu-arrow").removeClass("rotate");
      }
    });
  });
