import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-balance mb-4">EX3 2025 Competition Cases</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Practice cases for the upcoming competition across Medicine, Law, and Finance tracks
            </p>
          </div>

          {/* Pre-Law Cases Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-semibold">Pre-Law Track</h2>
              <Badge variant="secondary">2 Cases</Badge>
            </div>

            <div className="space-y-8">
              {/* McKenzie vs GreenTech Case */}
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">McKenzie VS. GreenTech Industries</CardTitle>
                      <CardDescription>Environmental Ethics & Whistleblowing Case</CardDescription>
                    </div>
                    <Badge>Pre-Law</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Background:</h4>
                    <p className="text-sm leading-relaxed">
                      GreenTech Industries is a mid-sized Canadian company that manufactures eco-friendly home
                      appliances, such as energy-efficient refrigerators and washing machines. The company prides itself
                      on being "green" and environmentally conscious, marketing itself as a leader in sustainability.
                      Ms. McKenzie, a 27-year-old employee, works in the Quality Control Department. Her job is to
                      inspect appliances before they are shipped to stores and report any safety or environmental
                      concerns. Recently, GreenTech has been struggling financially due to competition and pressure from
                      investors. To cut costs and speed up production, upper management decided to change the materials
                      used in the appliances.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Issue:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Ms. McKenzie has discovered that the new materials contain a chemical that can leak under certain
                      conditions, releasing harmful toxins into the air. Although this problem does not occur often, it
                      could seriously affect customers' health if it does. Ms. McKenzie brought her concerns to her
                      supervisor, but she was told to "ignore the issue" and sign off on the appliances as safe. Her
                      supervisor explained that if the company admits the problem, they could face recalls, lawsuits,
                      and possibly go out of business.
                    </p>

                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-medium mb-2">McKenzie's Ethical Dilemma:</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>If she stays silent, she will keep her job but may put families at risk.</li>
                        <li>
                          If she speaks up, she could lose her job, damage the company, and face backlash from
                          coworkers.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Assignment:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      As a team of Ms. McKenzie, Her lawyer, Ethics officer, and a Policy Writer, decide how you could
                      protect Ms. McKenzie, and how you could help her situation. Prepare a 3-5 minute oral within your
                      team to present to the hearing judge. You have full creative freedom to prove your point!
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Key Questions:</h5>
                      <p className="text-sm">
                        Should an employee have a duty to protect the public, even if it means going against their
                        employer?
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Evaluation Criteria (20 marks total):</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium">Case Understanding (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Deep understanding of dilemma, company issues, and legal/ethical conflicts
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Argument Strength (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Logical, persuasive arguments backed by evidence and examples
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Team Roles & Collaboration (0-5 marks)</h5>
                        <p className="text-muted-foreground">Clear role presentation and smooth teamwork</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Presentation & Delivery (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Clear, confident, engaging delivery with strong organization
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lopez vs MapleBank Case */}
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">Lopez vs. MapleBank Financial</CardTitle>
                      <CardDescription>Financial Ethics & Fiduciary Duty Case</CardDescription>
                    </div>
                    <Badge>Pre-Law</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Background:</h4>
                    <p className="text-sm leading-relaxed">
                      MapleBank Financial is a large Canadian bank that manages savings accounts, credit cards, and
                      investment portfolios for thousands of clients. Sofia Lopez, 29, is a junior financial advisor who
                      helps clients decide how to invest their money. She recently discovered that the bank has been
                      quietly steering customers into certain investment products. These products earn high fees for the
                      bank but have lower returns for clients compared to other safer options.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Issue:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Sofia noticed that her manager instructed her to "only recommend the high-fee funds." When she
                      asked why, she was told it was "just business" and necessary for MapleBank to stay profitable.
                    </p>

                    <div className="bg-muted p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Sofia's Ethical Dilemma:</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>
                          If she follows orders, she risks betraying clients' trust by giving them worse investments.
                        </li>
                        <li>
                          If she challenges her boss or reports the practice, she could lose her job and damage her
                          career.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Assignment:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      As a team of Sofia, an ethics officer, policy creator, and a fellow advisor, brainstorm what Sofia
                      should do. Present in a 3-5 minute oral presentation to the bank manager and the judges' panel. Be
                      sure to be creative and come with the best possible solution(s).
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Key Questions:</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>What should Sofia do?</li>
                        <li>Should banks be forced to always put clients' best interests first?</li>
                        <li>How do consumer protection laws and financial regulations apply?</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Evaluation Criteria (20 marks total + 2 bonus):</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium">Case Understanding (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Strong grasp of fiduciary duty, client trust, and conflict of interest
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Argument Strength (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Logical, persuasive arguments supported with finance/ethics examples
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Team Roles & Collaboration (0-5 marks)</h5>
                        <p className="text-muted-foreground">Effective use of each role with smooth teamwork</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Presentation & Delivery (0-5 marks)</h5>
                        <p className="text-muted-foreground">Clear, confident, engaging with strong organization</p>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h5 className="font-medium text-green-800 dark:text-green-200">Bonus (+2 marks):</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Creative financial policies or innovative solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Finance Track Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-semibold">Finance Track</h2>
              <Badge variant="secondary">1 Case</Badge>
            </div>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Rising Beans Coffee Co.</CardTitle>
                    <CardDescription>Strategic Financial Planning & Investment Analysis Case</CardDescription>
                  </div>
                  <Badge variant="outline">Finance</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Background:</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    Rising Beans Coffee Co. is a mid-sized Canadian coffee chain with 40 stores around Quebec and
                    Ontario. The company has built a strong reputation for ethical sourcing and community involvement,
                    but now it faces growing competition from bigger chains such as Tim Hortons, Starbucks, and other
                    independent cafes.
                  </p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h5 className="font-medium mb-2">2024 Financial Performance:</h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Revenue:</span> $12 Million
                      </div>
                      <div>
                        <span className="font-medium">Net Profit Margin:</span> 8%
                      </div>
                      <div>
                        <span className="font-medium">Cash on Hand:</span> $1.2 Million
                      </div>
                      <div>
                        <span className="font-medium">Debt-to-Equity Ratio:</span> 0.5
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Issue:</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    Rising Beans Management wants to expand but is unsure which strategy is financially viable. They
                    have narrowed down to 3 options and can only pursue one. The business can receive a bank loan at 6%
                    interest if needed. Investors want to see a payback period of 3-4 years and steady profitability.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option 1: New Stores</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Open 10 new locations throughout 2 years</li>
                        <li>Cost per store: $300,000</li>
                        <li>Expected annual revenue per store: $500,000 with 10% net profit margin</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option 2: Digital Expansion</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Invest in a mobile ordering and delivery app</li>
                        <li>One time cost: $1 million</li>
                        <li>Expected to increase existing stores' sales by 12% per year</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option 3: Wholesale Coffee Products</h5>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Launch a line of packaged coffee beans for grocery stores</li>
                        <li>Startup cost: $800,000</li>
                        <li>Expected 1st year revenue: $2 million, with 15% net profit margin</li>
                        <li>Annual Growth: 8%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Assignment:</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    As a team of financial consultants, think about what option would be the best for the company.
                    Present in a 3-5 minute oral presentation with your thinking as to which option should Rising Beans
                    proceed with and why. Good Luck!
                  </p>

                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Key Analysis Areas:</h5>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Financial impact (Return on Investment, profitability, payback period)</li>
                      <li>Risks assessment</li>
                      <li>Qualitative factors (competitors, brand image)</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Evaluation Criteria (30 marks total):</h4>
                  <div className="space-y-4 text-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium">Financial Analysis (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Accurate calculations, clear financial reasoning, multiple metrics compared effectively
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Strategic Evaluation (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Comprehensive evaluation integrating market trends, brand, and long-term sustainability
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Recommendation & Justification (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Strong, persuasive recommendation fully supported by quantitative + qualitative analysis
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Presentation Skills (0-5 marks)</h5>
                        <p className="text-muted-foreground">Excellent delivery; professional, engaging, polished</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Teamwork & Organization (0-5 marks)</h5>
                        <p className="text-muted-foreground">Seamless teamwork; highly professional transitions</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Creativity & Professionalism (0-5 marks)</h5>
                        <p className="text-muted-foreground">
                          Creative, polished, professional visuals; innovative approach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Medicine Track Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-semibold">Medicine Track</h2>
              <Badge variant="secondary">1 Case</Badge>
            </div>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Vitamin A Deficiency in Developing Countries</CardTitle>
                    <CardDescription>Global Health & Nutritional Intervention Case</CardDescription>
                  </div>
                  <Badge variant="outline">Medicine</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Background:</h4>
                  <p className="text-sm leading-relaxed">
                    In developing countries, due to reliance on staple, vitamin-lacking foods such as rice, wheat,
                    diarrhea and limited healthcare infrastructure, vitamin A deficiency is common. Vitamin A is a
                    vitamin crucial for photoreception and deficiency can cause night blindness. Nyctalopia is a major
                    risk for accidents, such as falls, at night. Scientists Peter Beyer and Ingo Potrykus dedicated
                    their careers in science to addressing this problem.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Assignment:</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    If you were tasked with addressing this issue, how would you go about mitigating it?
                  </p>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Response Format:</h5>
                    <p className="text-sm">Essay response (150 words)</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Key Considerations:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Limited healthcare infrastructure in developing countries</li>
                    <li>Reliance on staple foods lacking essential vitamins</li>
                    <li>Night blindness (nyctalopia) leading to increased accident risk</li>
                    <li>Public health intervention strategies</li>
                    <li>Sustainable and cost-effective solutions</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm italic">
                    Note: Reference image shows Retinoic acid structure (source: cell signalling technology)
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
