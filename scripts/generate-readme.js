const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const contentDir = path.join(rootDir, "src", "website-content");

// JSON paths
const homepagePath = path.join(contentDir, "homepage.json");
const featuresPath = path.join(contentDir, "features.json");
const commandsPath = path.join(contentDir, "commands.json");

function generate() {
  try {
    const homepage = JSON.parse(fs.readFileSync(homepagePath, "utf8"));
    const features = JSON.parse(fs.readFileSync(featuresPath, "utf8"));
    const commands = JSON.parse(fs.readFileSync(commandsPath, "utf8"));

    let markdown = `# TokenCap Developer Platform Frontend\n\n`;
    markdown += `> **${homepage.headline}**\n>\n> ${homepage.subheadline}\n\n`;

    markdown += `## 🚀 Overview\n\n`;
    markdown += `${homepage.description}\n\n`;
    markdown += `Run the installation command in your terminal:\n`;
    markdown += `\`\`\`bash\n${homepage.primaryCTACommand}\n\`\`\`\n\n`;

    markdown += `## 🎨 Key Benefits\n\n`;
    homepage.keyBenefits.forEach((benefit) => {
      markdown += `- **${benefit.label}:** ${benefit.description}\n`;
    });
    markdown += `\n`;

    markdown += `## ⚡ Core Capabilities\n\n`;
    // Group features by category
    const categories = {};
    features.forEach((feat) => {
      if (!categories[feat.category]) {
        categories[feat.category] = [];
      }
      categories[feat.category].push(feat);
    });

    for (const [category, items] of Object.entries(categories)) {
      markdown += `### 📁 ${category}\n\n`;
      items.forEach((item) => {
        markdown += `#### 🔹 ${item.title}\n`;
        markdown += `${item.description}\n\n`;
        if (item.technicalDetail) {
          markdown += `> ⚙️ *Technical Detail:* ${item.technicalDetail}\n\n`;
        }
        if (item.profiles) {
          markdown += `| Profile | Max Files | Max Bytes | Use Case |\n`;
          markdown += `| --- | --- | --- | --- |\n`;
          item.profiles.forEach((p) => {
            markdown += `| \`${p.name}\` | ${p.maxFiles} | ${p.maxSourceBytes} B | ${p.use} |\n`;
          });
          markdown += `\n`;
        }
      });
    }

    markdown += `## 💻 CLI Commands\n\n`;
    commands.forEach((cmd) => {
      markdown += `### 🛠️ \`${cmd.command}\`\n\n`;
      markdown += `${cmd.description}\n\n`;
      markdown += `**Example:**\n\`\`\`bash\n${cmd.example}\n\`\`\`\n\n`;
      if (cmd.options && cmd.options.length > 0) {
        markdown += `| Option / Flag | Description |\n`;
        markdown += `| --- | --- |\n`;
        cmd.options.forEach((opt) => {
          markdown += `| \`${opt.flag}\` | ${opt.description} |\n`;
        });
        markdown += `\n`;
      }
    });

    markdown += `## 📦 Metadata & License\n\n`;
    markdown += `- **NPM Package Name:** \`${homepage.socialProof.npmPackage}\`\n`;
    markdown += `- **License:** \`${homepage.socialProof.license}\`\n`;
    markdown += `- **Publisher:** \`${homepage.socialProof.publisher}\`\n\n`;

    markdown += `---  \n`;
    markdown += `*Generated automatically from \`website-content\` JSON source files on ${new Date().toLocaleDateString()}.*\n`;

    const outputPath = path.join(rootDir, "README.md");
    fs.writeFileSync(outputPath, markdown, "utf8");
    console.log("SUCCESS: README.md generated dynamically from website-content files!");
  } catch (error) {
    console.error("ERROR: Failed to generate dynamic README.md:", error);
    process.exit(1);
  }
}

generate();
