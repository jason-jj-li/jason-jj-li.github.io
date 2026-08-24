from pathlib import Path
import subprocess
import sys


def main():
  repo_root = Path(__file__).resolve().parent.parent
  blog_dir = repo_root / "content" / "blog"

  if not blog_dir.exists():
    print("content/blog directory not found; nothing to convert.")
    return 0

  notebooks = sorted(blog_dir.rglob("*.ipynb"))
  if not notebooks:
    print("No .ipynb files found under content/blog; nothing to convert.")
    return 0

  for nb_path in notebooks:
    rel = nb_path.relative_to(repo_root)
    print(f"Converting {rel} -> HTML")
    try:
      subprocess.run(
        [
          sys.executable,
          "-m",
          "jupyter",
          "nbconvert",
          "--ExtractOutputPreprocessor.enabled=False",
          "--to",
          "html",
          "--execute",
          "--ExecutePreprocessor.timeout=120",
          "--output-dir",
          str(nb_path.parent),
          "--template",
          "lab",
          str(nb_path),
        ],
        check=True,
      )
      print(f"✓ Successfully converted {rel}")
    except subprocess.CalledProcessError as exc:
      print(f"Failed to convert {rel}: {exc}")
      return exc.returncode

  return 0


if __name__ == "__main__":
  sys.exit(main())
