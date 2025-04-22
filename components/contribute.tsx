import Link from 'next/link';

import { Doc } from 'content-collections';

import { getGithubFileUrl, getGitHubIssueUrl } from '@/lib/github';

import { Icons } from './icons';

export function Contribute({ doc }: { doc: Doc }) {
  const contributeLinks = [
    {
      text: 'Report an issue',
      icon: Icons.Bug,
      href: getGitHubIssueUrl({
        owner: 'h3rmel',
        repo: 'h3-use',
        title: `[bug]: ${doc.slug}`,
        labels: ['bug', 'documentation'],
        template: 'bug_report.md',
      }),
    },
    {
      text: 'Request a feature',
      icon: Icons.Lightbulb,
      href: getGitHubIssueUrl({
        owner: 'h3rmel',
        repo: 'h3-use',
        title: `[feat]: ${doc.slug}`,
        labels: ['enhancement'],
        template: 'feature_request.md',
      }),
    },
    {
      text: 'Edit this page',
      icon: Icons.Pencil,
      href: getGithubFileUrl(doc.slug),
    },
  ];

  return (
    <div className="space-y-2">
      <p className="font-medium">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
