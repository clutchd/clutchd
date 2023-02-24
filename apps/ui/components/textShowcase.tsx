import { Block } from "@clutchd/block";
import { Card } from "@clutchd/card";
import { Divider } from "@clutchd/divider";
import { Link } from "@clutchd/link";
import {
  Blockquote,
  Em,
  H1,
  H2,
  H3,
  H4,
  Lead,
  P,
  Small,
  Strong,
} from "@clutchd/text";
import { Showcase } from ".";

function TextShowcase({ color }) {
  return (
    <Showcase title="Typography">
      <Card>
        <Block>
          <H1 theme={color}>Typography should be easy</H1>
          <Lead theme={color}>
            Until now, trying to style an article, document, or blog post with
            Tailwind has been a tedious task that required a keen eye for
            typography and a lot of complex custom CSS.
          </Lead>
          <P theme={color}>
            By default, Tailwind removes all of the default browser styling from
            paragraphs, headings, lists and more. This ends up being really
            useful for building application UIs because you spend less time
            undoing user-agent styles, but when you <Em>really are</Em> just
            trying to style some content that came from a rich-text editor in a
            CMS or a markdown file, it can be surprising and unintuitive.
          </P>
          <P theme={color}>
            We get lots of complaints about it actually, with people regularly
            asking us things like:
          </P>
          <Blockquote theme={color}>
            Why is Tailwind removing the default styles on my <code>h1</code>{" "}
            elements? How do I disable this? What do you mean I lose all the
            other base styles too?
          </Blockquote>
          <P theme={color}>
            We hear you, but we&apos;re not convinced that simply disabling our
            base styles is what you really want. You don&apos;t want to have to
            remove annoying margins every time you use a <code>p</code> element
            in a piece of your dashboard UI. And I doubt you really want your
            blog posts to use the user-agent styles either — you want them to
            look <Em>awesome</Em>, not awful.
          </P>
          <P theme={color}>
            The <code>@tailwindcss/typography</code> plugin is our attempt to
            give you what you <Em>actually</Em> want, without any of the
            downsides of doing something stupid like disabling our base styles.
          </P>
          <P theme={color}>
            It adds a new <code>prose</code> class that you can slap on any
            block of vanilla HTML content and turn it into a beautiful,
            well-formatted document:
          </P>
          {/*
      <Pre><code class="language-html">&lt;article class="prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre>
      
   */}
          <P theme={color}>
            For more information about how to use the plugin and the features it
            includes,{" "}
            {/* <Link
              theme={color}
              href="https://github.com/tailwindcss/typography/blob/master/README.md"
            >
              read the documentation
            </Link> */}
            .
          </P>
          <Divider theme={color} />
          <H2 theme={color}>What to expect from here on out</H2>
          <P theme={color}>
            What follows from here is just a bunch of absolute nonsense
            I&apos;ve written to dogfood the plugin itself. It includes every
            sensible typographic element I could think of, like{" "}
            <Strong>bold text</Strong>, unordered lists, ordered lists, code
            blocks, block quotes, <Em>italics</Em>, and even{" "}
            <Small>small</Small> text.
          </P>
          <P theme={color}>
            It&apos;s important to cover all of these use cases for a few
            reasons:
          </P>
          {/* <ol>
          <li>We want everything to look good out of the box.</li>
          <li>Really just the first reason, that&apos;s the whole point of the plugin.</li>
          <li>Here&apos;s a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
        </ol> */}
          <P theme={color}>
            Now we&apos;re going to try out another header style.
          </P>
          <H3 theme={color}>Typography should be easy</H3>
          <P theme={color}>
            So that&apos;s a header for you — with any luck if we&apos;ve done
            our job correctly that will look pretty reasonable.
          </P>
          <P theme={color}>
            Something a wise person once told me about typography is:
          </P>
          <Blockquote theme={color}>
            <P theme={color}>
              Typography is pretty important if you don&apos;t want your stuff
              to look like trash. Make it good then it won&apos;t be bad.
            </P>
          </Blockquote>
          <P theme={color}>
            It&apos;s probably important that images look okay here by default
            as well:
          </P>
          {/* <figure>
          <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="">
            <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption>
        </figure> */}
          <P theme={color}>
            Now I&apos;m going to show you an example of an unordered list to
            make sure that looks good, too:
          </P>
          {/* <ul>
          <li>So here is the first item in this list.</li>
          <li>In this example we&apos;re keeping the items short.</li>
          <li>Later, we&apos;ll use longer, more complex list items.</li>
        </ul> */}
          <P theme={color}>And that&apos;s the end of this section.</P>
          <H2 theme={color}>What if we stack headings?</H2>
          <H3 theme={color}>We should make sure that looks good, too.</H3>
          <P theme={color}>
            Sometimes you have headings directly underneath each other. In those
            cases you often have to undo the top margin on the second heading
            because it usually looks better for the headings to be closer
            together than a paragraph followed by a heading should be.
          </P>
          <H3 theme={color}>When a heading comes after a paragraph …</H3>
          <P theme={color}>
            When a heading comes after a paragraph, we need a bit more space,
            like I already mentioned above. Now let&apos;s see what a more
            complex list would look like.
          </P>
          {/* <ul>
          <li>
            <P theme={color}><Strong>I often do this thing where list items have headings.</Strong></P>
            <P theme={color}>For some reason I think this looks cool which is unfortunate because it&apos;s pretty annoying to get the styles right.</P>
            <P theme={color}>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a Strong argument that you just shouldn&apos;t write this way.</P>
          </li>
          <li>
            <P theme={color}><Strong>Since this is a list, I need at least two items.</Strong></P>
            <P theme={color}>I explained what I&apos;m doing already in the previous list item, but a list wouldn&apos;t be a list if it only had one item, and we really want this to look realistic. That&apos;s why I&apos;ve added this second list item so I actually have something to look at when writing the styles.</P>
          </li>
          <li>
            <P theme={color}><Strong>It&apos;s not a bad idea to add a third item either.</Strong></P>
            <P theme={color}>I think it probably would&apos;ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</P>
          </li>
        </ul> */}
          <P theme={color}>
            After this sort of list I usually have a closing statement or
            paragraph, because it kinda looks weird jumping right to a heading.
          </P>
          <H2 theme={color}>Code should look okay by default.</H2>
          <P theme={color}>
            I think most people are going to use{" "}
            {/* <Link theme={color} href="https://highlightjs.org/">
              highlight.js
            </Link>{" "}
            or{" "}
            <Link theme={color} href="https://prismjs.com/">
              Prism
            </Link>{" "} */}
            or something if they want to style their code blocks but it
            wouldn&apos;t hurt to make them look <Em>okay</Em> out of the box,
            even with no syntax highlighting.
          </P>
          <P theme={color}>
            Here&apos;s what a default <code>tailwind.config.js</code> file
            looks like at the time of writing:
          </P>
          {/* <pre><code class="language-js">module.exports = {
          purge: [],
          theme: {
            extend: { },
  },
          variants: { },
          plugins: [],
}
        </code></pre> */}
          <P theme={color}>Hopefully that looks good enough to you.</P>
          <H3 theme={color}>What about nested lists?</H3>
          <P theme={color}>
            Nested lists basically always look bad which is why editors like
            Medium don&apos;t even let you do it, but I guess since some of you
            goofballs are going to do it we have to carry the burden of at least
            making it work.
          </P>
          {/* <ol>
          <li>
            <Strong>Nested lists are rarely a good idea.</Strong>
            <ul>
              <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
              <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
              <li>Nesting tons of folders in your source code is also not helpful.</li>
            </ul>
          </li>
          <li>
            <Strong>Since we need to have more items, here&apos;s another one.</Strong>
            <ul>
              <li>I&apos;m not sure if we&apos;ll bother styling more than two levels deep.</li>
              <li>Two is already too much, three is guaranteed to be a bad idea.</li>
              <li>If you nest four levels deep you belong in prison.</li>
            </ul>
          </li>
          <li>
            <Strong>Two items isn&apos;t really a list, three is good though.</Strong>
            <ul>
              <li>Again please don&apos;t nest lists if you want people to actually read your content.</li>
              <li>Nobody wants to look at this.</li>
              <li>I&apos;m upset that we even have to bother styling this.</li>
            </ul>
          </li>
        </ol> */}
          <P theme={color}>
            The most annoying thing about lists in Markdown is that{" "}
            <code>&lt;li&gt;</code> elements aren&apos;t given a child{" "}
            <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in
            the list item. That means I have to worry about styling that
            annoying situation too.
          </P>
          {/* <ul>
          <li>
            <P theme={color}><Strong>For example, here&apos;s another nested list.</Strong></P>
            <P theme={color}>But this time with a second paragraph.</P>
            <ul>
              <li>These list items won&apos;t have <code>&lt;p&gt;</code> tags</li>
              <li>Because they are only one line each</li>
            </ul>
          </li>
          <li>
            <P theme={color}><Strong>But in this second top-level list item, they will.</Strong></P>
            <P theme={color}>This is especially annoying because of the spacing on this paragraph.</P>
            <ul>
              <li>
                <P theme={color}>As you can see here, because I&apos;ve added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</P>
                <P theme={color}>This is the second line I&apos;m talking about by the way.</P>
              </li>
              <li><P theme={color}>Finally here&apos;s another list item so it&apos;s more like a list.</P></li>
            </ul>
          </li>
          <li><P theme={color}>A closing list item, but with no nested list, because why not?</P></li>
        </ul> */}
          <P theme={color}>And finally a sentence to close off this section.</P>
          <H2 theme={color}>There are other elements we need to style</H2>
          <P theme={color}>
            I almost forgot to mention links, like{" "}
            {/* <Link theme={color} href="https://tailwindcss.com">
              this link to the Tailwind CSS website
            </Link> */}
            . We almost made them blue but that&apos;s so yesterday, so we went
            with dark gray, feels edgier.
          </P>
          <P theme={color}>We even included table styles, check it out:</P>
          {/* <table>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Origin</th>
              <th>Finisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bret "The Hitman" Hart</td>
              <td>Calgary, AB</td>
              <td>Sharpshooter</td>
            </tr>
            <tr>
              <td>Stone Cold Steve Austin</td>
              <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
            </tr>
            <tr>
              <td>Randy Savage</td>
              <td>Sarasota, FL</td>
              <td>Elbow Drop</td>
            </tr>
            <tr>
              <td>Vader</td>
              <td>Boulder, CO</td>
              <td>Vader Bomb</td>
            </tr>
            <tr>
              <td>Razor Ramon</td>
              <td>Chuluota, FL</td>
              <td>Razor&apos;s Edge</td>
            </tr>
          </tbody>
        </table> */}
          <P theme={color}>
            We also need to make sure inline code looks good, like if I wanted
            to talk about <code>&lt;span&gt;</code> elements or tell you the
            good news about <code>@tailwindcss/typography</code>.
          </P>
          <H3 theme={color}>
            Sometimes I even use <code>code</code> in headings
          </H3>
          <P theme={color}>
            Even though it&apos;s probably a bad idea, and historically
            I&apos;ve had a hard time making it look good. This{" "}
            <Em>&quot;wrap the code blocks in backticks&quot;</Em> trick works
            pretty well though really.
          </P>
          <P theme={color}>
            Another thing I&apos;ve done in the past is put a <code>code</code>{" "}
            tag inside of a link, like if I wanted to tell you about the{" "}
            {/* <Link theme={color} href="https://github.com/tailwindcss/docs">
              <code>tailwindcss/docs</code>
            </Link>{" "} */}
            repository. I don&apos;t love that there is an underline below the
            backticks but it is absolutely not worth the madness it would
            require to avoid it.
          </P>
          <H4 theme={color}>
            We haven&apos;t used an <code>H4</code> yet
          </H4>
          <P theme={color}>
            But now we have. Please don&apos;t use <code>h5</code> or{" "}
            <code>h6</code> in your content, Medium only supports two heading
            levels for a reason, you animals. I honestly considered using a{" "}
            <code>before</code> pseudo-element to scream at you if you use an{" "}
            <code>h5</code> or <code>h6</code>.
          </P>
          <P theme={color}>
            We don&apos;t style them at all out of the box because{" "}
            <code>H4</code> elements are already so small that they are the same
            size as the body copy. What are we supposed to do with an{" "}
            <code>h5</code>, make it <Em>smaller</Em> than the body copy? No
            thanks.
          </P>
          <H3 theme={color}>
            We still need to think about stacked headings though.
          </H3>
          <H4 theme={color}>
            Let&apos;s make sure we don&apos;t screw that up with{" "}
            <code>H4</code> elements, either.
          </H4>
          <P theme={color}>
            Phew, with any luck we have styled the headings above this text and
            they look pretty good.
          </P>
          <P theme={color}>
            Let&apos;s add a closing paragraph here so things end with a
            decently sized block of text. I can&apos;t explain why I want things
            to end that way but I have to assume it&apos;s because I think
            things will look weird or unbalanced if there is a heading too close
            to the end of the document.
          </P>
          <P theme={color}>
            What I&apos;ve written here is probably long enough, but adding this
            final sentence can&apos;t hurt.
          </P>
        </Block>
      </Card>
      <Card>
        <Block>
          <H1 theme={color}>The Joke Tax Chronicles</H1>
          <P theme={color}>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </P>
          <H2 theme={color}>The King&apos;s Plan</H2>
          <P theme={color}>
            The king thought long and hard, and finally came up with{" "}
            {/* <Link theme={color} href="#">
              a brilliant plan
            </Link> */}
            : he would tax the jokes in the kingdom.
          </P>
          <Blockquote theme={color}>
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </Blockquote>
          <H3 theme={color}>The Joke Tax</H3>
          <P theme={color}>
            The king&apos;s subjects were not amused. They grumbled and
            complained, but the king was firm:
          </P>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <P theme={color}>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </P>
          <H3 theme={color}>Jokester&apos;s Revolt</H3>
          <P theme={color}>
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king&apos;s pillow,
            in his soup, even in the royal toilet. The king was furious, but he
            couldn&apos;t seem to stop Jokester.
          </P>
          <P theme={color}>
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn&apos;t help
            but laugh. And once they started laughing, they couldn&apos;t stop.
          </P>
          <H3 theme={color}>The People&apos;s Rebellion</H3>
          <P theme={color}>
            The people of the kingdom, feeling uplifted by the laughter, started
            to tell jokes and puns again, and soon the entire kingdom was in on
            the joke.
          </P>
          <div className="w-full my-6 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="p-0 m-0 border-t border-slate-300 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
                  <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    King&apos;s Treasury
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    People&apos;s happiness
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-0 m-0 border-t border-slate-200 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Empty
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Overflowing
                  </td>
                </tr>
                <tr className="p-0 m-0 border-t border-slate-200 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Modest
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Satisfied
                  </td>
                </tr>
                <tr className="p-0 m-0 border-t border-slate-200 even:bg-slate-100 dark:border-slate-600 dark:even:bg-slate-800">
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Full
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                    Ecstatic
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <P theme={color}>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero, and the kingdom lived happily ever after.
          </P>
          <P theme={color}>
            The moral of the story is: never underestimate the power of a good
            laugh and always be careful of bad ideas.
          </P>
        </Block>
      </Card>
    </Showcase>
  );
}

export { TextShowcase };
