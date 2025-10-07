from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Go to the application's homepage.
    page.goto("http://localhost:8000")

    # 2. Open the collapsed header.
    page.locator(".navbar-toggler").click()

    # 3. Check that the main profile image is visible.
    profile_image = page.locator('img[alt="Profile"]')
    # wait for it to be visible after click
    expect(profile_image).to_be_visible(timeout=5000)

    # 4. Check that the project images are visible.
    project_images = page.locator('main .card-img-top')
    expect(project_images).to_have_count(5)
    for i in range(5):
        expect(project_images.nth(i)).to_be_visible()

    # 5. Take screenshot.
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)