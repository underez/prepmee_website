import Footer8 from "@/components/footer/Footer8";
import Header20 from "@/components/header/Header20";
import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="bgc-thm4">
                <Header20 />
                <section className="our-login">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-6 m-auto wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="main-title text-center">
                                    <h1 className="title">Log In</h1>
                                   
                                </div>
                            </div>
                        </div>
                        <div
                            className="row wow fadeInRight"
                            data-wow-delay="300ms"
                        >
                            <div className="col-xl-6 mx-auto">
                                <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                    <div className="mb30">
                                        <h4>We're glad to see you again!</h4>
                                        <p className="text">
                                            Don't have an account?{" "}
                                            <Link
                                                href="/register"
                                                className="text-thm"
                                            >
                                                Sign Up!
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mb20">
                                        <label className="form-label fw600 dark-color">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="@"
                                        />
                                    </div>
                                    <div className="mb15">
                                        <label className="form-label fw600 dark-color">
                                            Password
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="*******"
                                        />
                                    </div>
                                    <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                                        <label className="custom_checkbox fz14 ff-heading">
                                            Remember me
                                            <input
                                                type="checkbox"
                                                defaultChecked="checked"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <a className="fz14 ff-heading">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="d-grid mb20">
                                        <button
                                            className="ud-btn btn-thm"
                                            type="button"
                                        >
                                            Log In{" "}
                                            <i className="fal fa-arrow-right-long" />
                                        </button>
                                    </div>
                                    <div className="hr_content mb20">
                                        <hr />
                                        <span className="hr_top_text">OR</span>
                                    </div>
                                    <div className="d-md-flex justify-content-between">
                                        
                                    <button 
                                            className="ud-btn btn-google w-100 justify-content-center d-flex align-items-center"
                                            type="button"
                                        >
                                            <i className="d-flex align-items-center" />{" "}
                                            Continue Google
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer8 />
            </div>
        </>
    );
}