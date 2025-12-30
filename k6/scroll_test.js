import { chromium } from "k6/x/browser";
import { check } from "k6";

export default function () {
  const browser = chromium.launch({ headless: true });
  const page = browser.newPage();
  page.goto("https://bighamj.github.io/bigham/");
  check(page, {
    "title contains Example": (p) => p.title().includes("Example"),
  });
  browser.close();
}
