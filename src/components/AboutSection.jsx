import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Tech-Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                            With over 2 years of experience in web development, I specialize
                            in creating responsive, accessible, and performant web
                            applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1rwOraBdWiwXX4nthiTxx6coxhcaYnXzc/view?usp=sharing"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building robust server-side applications, APIs, and databases using scalable technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <div className="bg-muted p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-primary">
                            Frontend Development Intern, CloudsBySunil
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">July 2025 – Present</p>
                        <p className="text-muted-foreground">
                            Working on responsive UIs using React, JavaScript, and Figma, contributing to real-world projects with a focus on user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
