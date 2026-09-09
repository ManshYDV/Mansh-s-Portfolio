$(function () {
  let profileIndex = 0;
  let profileTimer = null;
  let lastFocusedElement = null;

  // ---------- Rendering ----------

  function renderPortfolio() {
    const p = portfolio.personal;

    document.title = p.name + " | " + p.title;
    $(".brand").text(p.name);
    $(".hero h1").text(p.name);
    $(".hero h2").text(p.title);
    $(".hero-intro").text(p.introduction);
    $(".profile-caption").text(p.location);
    $("#about-text").text(portfolio.about.description);
    $("#year").text(new Date().getFullYear());

    setLink("[data-link='github']", portfolio.social.github);
    setLink("[data-link='linkedin']", portfolio.social.linkedin);
    setLink("[data-link='resume']", p.resume);
    setLink("[data-link='email']", "mailto:" + p.email, p.email);

    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    startProfileRotation();
  }

  function setLink(selector, href, text) {
    const $links = $(selector);
    $links.attr("href", href || "#");
    if (text) $links.text(text);
  }

  function renderSkills() {
    const $grid = $("#skills-grid").empty();

    $.each(portfolio.skills, function (category, skills) {
      if (!skills || !skills.length) return;

      const $group = $("<div>", { class: "skill-group" });
      $("<h3>").text(category).appendTo($group);

      const $list = $("<div>", { class: "skill-list" });
      $.each(skills, function (_, skill) {
        $("<span>", { class: "skill-tag" }).text(skill).appendTo($list);
      });

      $list.appendTo($group);
      $group.appendTo($grid);
    });
  }

  function renderExperience() {
    const $list = $("#experience-list").empty();

    $.each(portfolio.experience, function (index, item) {
      const $entry = $("<article>", { class: "experience-item" });
      const $meta = $("<div>", { class: "experience-meta" })
        .append($("<span>").text(item.period));

      const $body = $("<div>", { class: "experience-body" })
        .append($("<h3>").text(item.role))
        .append($("<p>", { class: "company" }).text(item.company))
        .append($("<p>", { class: "summary" }).text(item.summary))
        .append($("<button>", {
          class: "text-button view-experience",
          type: "button",
          "data-index": index
        }).text("View Details →"));

      $entry.append($meta, $body).appendTo($list);
    });
  }

  function renderProjects() {
    const $grid = $("#projects-grid").empty();

    $.each(portfolio.projects, function (index, project) {
      const $card = $("<article>", { class: "project-card" });

      const $image = $("<img>", {
        src: project.thumbnail,
        alt: project.name + " project preview",
        loading: "lazy"
      });

      const $content = $("<div>", { class: "project-content" })
        .append($("<h3>").text(project.name))
        .append($("<p>").text(project.shortDescription));

      const $tags = $("<div>", { class: "project-tags" });
      $.each(project.technologies, function (_, tech) {
        $("<span>").text(tech).appendTo($tags);
      });
      $tags.appendTo($content);

      const $actions = $("<div>", { class: "project-actions" });

      if (project.github) {
        $("<a>", {
          href: project.github,
          target: "_blank",
          rel: "noopener noreferrer"
        }).text("GitHub ↗").appendTo($actions);
      }

      if (project.liveDemo) {
        $("<a>", {
          href: project.liveDemo,
          target: "_blank",
          rel: "noopener noreferrer"
        }).text("Live Demo ↗").appendTo($actions);
      }

      $("<button>", {
        class: "text-button view-project",
        type: "button",
        "data-index": index
      }).text("View Details →").appendTo($actions);

      $content.append($actions);
      $card.append($image, $content).appendTo($grid);
    });
  }

  function renderEducation() {
    const $list = $("#education-list").empty();

    $.each(portfolio.education, function (_, item) {
      const $entry = $("<article>", { class: "education-item" })
        .append($("<div>", { class: "education-year" }).text(item.year))
        .append(
          $("<div>", { class: "education-content" })
            .append($("<h3>").text(item.degree))
            .append($("<p>", { class: "company" }).text(item.institution))
            .append($("<p>").text(item.details))
            .append(item.score ? $("<p>", { class: "score" }).text(item.score) : "")
        );

      $entry.appendTo($list);
    });
  }

  // ---------- Profile rotation ----------

  function startProfileRotation() {
    const images = portfolio.personal.profileImages || [];
    if (images.length < 2) return;

    $.each(images, function (_, src) {
      $("<img>", { src: src, alt: "" }).css({
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
      }).appendTo("body");
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    profileTimer = setInterval(function () {
      let nextIndex;

      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === profileIndex);
      const $image = $("#profile-image");

      $image.addClass("profile-fade");
      setTimeout(function () {
        $image.attr("src", images[nextIndex]);
        profileIndex = nextIndex;
        requestAnimationFrame(function () {
          $image.removeClass("profile-fade");
        });
      }, 220);
    }, 2000);
  }

  // ---------- Theme ----------

  function autoTheme() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  }

  function applyTheme(preference) {
    const resolved = preference === "auto" ? autoTheme() : preference;
    $("html").attr("data-theme", resolved);
    $(".theme-label").text(preference.charAt(0).toUpperCase() + preference.slice(1));
    localStorage.setItem("portfolio-theme", preference);
  }

  function getThemePreference() {
    return localStorage.getItem("portfolio-theme") || "auto";
  }

  function scheduleAutoThemeCheck() {
    setInterval(function () {
      if (getThemePreference() === "auto") {
        applyTheme("auto");
      }
    }, 60000);
  }

  // ---------- Modals ----------

  function openModal(html, title) {
    lastFocusedElement = document.activeElement;
    $("#modal-content").html(html);
    $("#modal-title").remove();

    if (title) {
      $("<h2>", { id: "modal-title", class: "sr-only" }).text(title).prependTo("#modal-content");
    }

    $("body").addClass("modal-open");
    $("#modal").attr("aria-hidden", "false").addClass("is-open");
    $(".modal-close").trigger("focus");
  }

  function closeModal() {
    $("#modal").removeClass("is-open").attr("aria-hidden", "true");
    $("body").removeClass("modal-open");
    $("#modal-content").empty();

    if (lastFocusedElement) {
      $(lastFocusedElement).trigger("focus");
      lastFocusedElement = null;
    }
  }

  function listHtml(items) {
    if (!items || !items.length) return "<p class='muted'>Not provided.</p>";
    let html = "<ul>";
    $.each(items, function (_, item) {
      html += "<li>" + escapeHtml(item) + "</li>";
    });
    return html + "</ul>";
  }

  function escapeHtml(value) {
    return $("<div>").text(value == null ? "" : value).html();
  }

  function experienceModal(item) {
    const d = item.details;
    return `
      <div class="modal-header">
        <p class="eyebrow">EXPERIENCE</p>
        <h2>${escapeHtml(item.role)}</h2>
        <p class="modal-company">${escapeHtml(item.company)} · ${escapeHtml(item.period)}</p>
      </div>
      <div class="modal-sections">
        <section><h3>Responsibilities</h3>${listHtml(d.responsibilities)}</section>
        <section><h3>Technologies</h3><div class="modal-tags">${(d.technologies || []).map(escapeHtml).map(x => "<span>" + x + "</span>").join("")}</div></section>
        <section><h3>Important Work / Projects</h3>${listHtml(d.projects)}</section>
        <section><h3>Achievements / Impact</h3>${listHtml(d.achievements)}</section>
        <section><h3>Additional Information</h3><p>${escapeHtml(d.additionalInformation)}</p></section>
      </div>`;
  }

  function projectModal(project) {
    const d = project.details;
    let gallery = "";

    if (d.screenshots && d.screenshots.length) {
      gallery = `
        <section class="gallery-section">
          <h3>Project Screenshots</h3>
          <div class="gallery">
            <button class="gallery-prev" type="button" aria-label="Previous image">‹</button>
            <img id="gallery-image" src="${escapeHtml(d.screenshots[0])}" alt="${escapeHtml(project.name)} screenshot">
            <button class="gallery-next" type="button" aria-label="Next image">›</button>
          </div>
          <p class="gallery-counter"><span id="gallery-current">1</span> / ${d.screenshots.length}</p>
        </section>`;
    }

    let links = "";
    if (project.github || project.liveDemo) {
      links = `<div class="modal-actions">
        ${project.github ? `<a class="button button-primary" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""}
        ${project.liveDemo ? `<a class="button button-secondary" href="${escapeHtml(project.liveDemo)}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}
      </div>`;
    }

    return `
      <div class="project-modal-image">
        <img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(project.name)} project preview">
      </div>
      <div class="modal-header">
        <p class="eyebrow">PROJECT</p>
        <h2>${escapeHtml(project.name)}</h2>
        <p>${escapeHtml(project.shortDescription)}</p>
      </div>
      <div class="modal-sections">
        <section><h3>Description</h3><p>${escapeHtml(d.description)}</p></section>
        <section><h3>Problem</h3><p>${escapeHtml(d.problem)}</p></section>
        <section><h3>Features</h3>${listHtml(d.features)}</section>
        <section><h3>Technology Stack</h3><div class="modal-tags">${(project.technologies || []).map(escapeHtml).map(x => "<span>" + x + "</span>").join("")}</div></section>
        <section><h3>Architecture</h3><p>${escapeHtml(d.architecture)}</p></section>
        <section><h3>Challenges</h3>${listHtml(d.challenges)}</section>
        <section><h3>Solutions</h3>${listHtml(d.solutions)}</section>
        <section><h3>Impact</h3><p>${escapeHtml(d.impact)}</p></section>
        ${gallery}
      </div>
      ${links}`;
  }

  // ---------- Events ----------

  $(".nav-menu a").on("click", function () {
    $(".nav-menu").removeClass("is-open");
    $(".menu-toggle").attr("aria-expanded", "false");
  });

  $(".menu-toggle").on("click", function () {
    const open = $(".nav-menu").toggleClass("is-open").hasClass("is-open");
    $(this).attr("aria-expanded", open ? "true" : "false");
  });

  $(".theme-button").on("click", function () {
    const open = $(".theme-menu").toggleClass("is-open").hasClass("is-open");
    $(this).attr("aria-expanded", open ? "true" : "false");
  });

  $("[data-theme-choice]").on("click", function () {
    applyTheme($(this).data("theme-choice"));
    $(".theme-menu").removeClass("is-open");
    $(".theme-button").attr("aria-expanded", "false");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".theme-button, .theme-menu").length) {
      $(".theme-menu").removeClass("is-open");
      $(".theme-button").attr("aria-expanded", "false");
    }
  });

  $(document).on("click", ".view-experience", function () {
    const item = portfolio.experience[$(this).data("index")];
    openModal(experienceModal(item), item.role);
  });

  $(document).on("click", ".view-project", function () {
    const project = portfolio.projects[$(this).data("index")];
    openModal(projectModal(project), project.name);
    setupGallery(project.details.screenshots || []);
  });

  function setupGallery(images) {
    if (images.length < 2) return;

    let index = 0;

    function showImage() {
      $("#gallery-image").attr("src", images[index]);
      $("#gallery-current").text(index + 1);
    }

    $(".gallery-prev").on("click", function () {
      index = (index - 1 + images.length) % images.length;
      showImage();
    });

    $(".gallery-next").on("click", function () {
      index = (index + 1) % images.length;
      showImage();
    });
  }

  $(".modal-close, .modal-backdrop").on("click", closeModal);

  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && $("#modal").hasClass("is-open")) {
      closeModal();
    }
  });

  // Basic focus trap for open modal.
  $("#modal").on("keydown", function (event) {
    if (event.key !== "Tab") return;

    const $focusable = $("#modal").find("button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])").filter(":visible");
    if (!$focusable.length) return;

    const first = $focusable[0];
    const last = $focusable[$focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      $(last).trigger("focus");
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      $(first).trigger("focus");
    }
  });

  // Initialize.
  renderPortfolio();
  applyTheme(getThemePreference());
  scheduleAutoThemeCheck();


});


